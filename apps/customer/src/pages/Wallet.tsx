import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppShell, Button, Card, ListItem } from "@gozem/design-system";
import { formatXOF, walletRechargeMaxXof, walletRechargeMinXof, walletTx } from "@gozem/fake-data";
import { useT } from "@gozem/i18n";
import { BackTopBar, CustomerBottomNav } from "../lib/nav";

/** Flat blue full-bleed header (consumer_ss3): back arrow, balance, "+ Recharger" pill. */
function WalletHeader({ balanceXof }: { balanceXof: number }) {
  const { t } = useT();
  const navigate = useNavigate();
  return (
    <div className="gz-page-header gz-page-header--wallet">
      <button type="button" className="gz-page-header__back" aria-label={t("common.back")} onClick={() => navigate("/home")}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <p style={{ margin: "var(--space-2) 0 0", fontSize: 12, opacity: 0.85 }}>{t("customer.wallet.title")}</p>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-3)" }}>
        <p style={{ margin: 0, fontSize: 26, fontWeight: 700 }}>{formatXOF(balanceXof)}</p>
        <Button onClick={() => navigate("/wallet/recharge")} style={{ width: "auto", background: "var(--color-white)", color: "var(--color-wallet-customer)", minHeight: 36, padding: "0 var(--space-3)" }}>
          + {t("customer.wallet.recharge")}
        </Button>
      </div>
    </div>
  );
}

const balanceXof = walletTx.reduce((sum, tx) => sum + (tx.type === "credit" ? tx.amountXof : -tx.amountXof), 0);

function formatDate(iso: string, lang: string) {
  return new Date(iso).toLocaleDateString(lang === "en" ? "en-GB" : "fr-FR", { day: "2-digit", month: "short" });
}

/** C-13: Wallet. */
export function Wallet() {
  const { t, lang } = useT();
  const navigate = useNavigate();

  return (
    <AppShell bottomNav={<CustomerBottomNav current="home" />}>
      <WalletHeader balanceXof={balanceXof} />

      <Card style={{ padding: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "var(--space-3) var(--space-3) 0" }}>
          <p style={{ fontWeight: 600, margin: 0 }}>{t("customer.wallet.recentTitle")}</p>
          <button type="button" className="gz-button gz-button--ghost" style={{ width: "auto", minHeight: 32 }} onClick={() => navigate("/wallet/history")}>
            {t("common.seeAll")}
          </button>
        </div>
        {walletTx.length === 0 ? (
          <p style={{ padding: "0 var(--space-3) var(--space-3)" }}>{t("customer.wallet.emptyTitle")}</p>
        ) : (
          walletTx
            .slice(0, 3)
            .map((tx) => (
              <ListItem
                key={tx.id}
                title={tx.label}
                subtitle={formatDate(tx.createdAt, lang)}
                icon={<span aria-hidden="true">{tx.type === "credit" ? "+" : "-"}</span>}
                trailing={
                  <strong style={{ color: tx.type === "credit" ? "var(--color-primary)" : "var(--color-danger)" }}>
                    {tx.type === "credit" ? "+" : "-"}
                    {formatXOF(tx.amountXof)}
                  </strong>
                }
              />
            ))
        )}
      </Card>
    </AppShell>
  );
}

/** C-14: Recharge wallet. */
export function WalletRecharge() {
  const { t } = useT();
  const navigate = useNavigate();
  const [operator, setOperator] = useState<"mtn" | "moov">("mtn");
  const [amount, setAmount] = useState("5000");
  const [error, setError] = useState("");

  function submit() {
    const value = Number(amount);
    if (!value || value < walletRechargeMinXof || value > walletRechargeMaxXof) {
      setError(t("customer.recharge.rangeHint"));
      document.getElementById("recharge-amount")?.focus();
      return;
    }
    navigate("/wallet");
  }

  return (
    <AppShell topBar={<BackTopBar title={t("customer.recharge.title")} to="/wallet" />}>
      <Card>
        <p style={{ fontWeight: 600, marginTop: 0 }}>{t("customer.recharge.operatorLabel")}</p>
        <div style={{ display: "flex", gap: "var(--space-3)", marginBottom: "var(--space-4)" }}>
          <button
            type="button"
            aria-pressed={operator === "mtn"}
            className="gz-button gz-button--secondary"
            onClick={() => setOperator("mtn")}
            style={{ outline: operator === "mtn" ? "2px solid var(--color-primary)" : undefined }}
          >
            {t("customer.recharge.operatorMtn")}
          </button>
          <button
            type="button"
            aria-pressed={operator === "moov"}
            className="gz-button gz-button--secondary"
            onClick={() => setOperator("moov")}
            style={{ outline: operator === "moov" ? "2px solid var(--color-primary)" : undefined }}
          >
            {t("customer.recharge.operatorMoov")}
          </button>
        </div>
        <label className="gz-field__label" htmlFor="recharge-amount">
          {t("customer.recharge.amountLabel")}
        </label>
        <input
          id="recharge-amount"
          className="gz-field__input"
          style={{ width: "100%", marginBottom: 4 }}
          inputMode="numeric"
          value={amount}
          aria-invalid={Boolean(error)}
          onChange={(e) => setAmount(e.target.value.replace(/[^0-9]/g, ""))}
        />
        {error ? (
          <p role="alert" style={{ color: "var(--color-danger)", fontSize: 12 }}>
            {error}
          </p>
        ) : (
          <p style={{ fontSize: 12, color: "var(--color-grey)" }}>{t("customer.recharge.rangeHint")}</p>
        )}
      </Card>
      <Button onClick={submit}>{t("customer.recharge.cta")}</Button>
    </AppShell>
  );
}

/** C-15: Full transaction history. */
export function WalletHistory() {
  const { t, lang } = useT();

  return (
    <AppShell topBar={<BackTopBar title={t("customer.walletHistory.title")} to="/wallet" />}>
      <Card>
        {walletTx.length === 0 ? (
          <p>{t("customer.walletHistory.emptyTitle")}</p>
        ) : (
          walletTx.map((tx) => (
            <ListItem
              key={tx.id}
              title={tx.label}
              subtitle={`${formatDate(tx.createdAt, lang)} · ${tx.type === "credit" ? "+" : "-"}${formatXOF(tx.amountXof)}`}
            />
          ))
        )}
      </Card>
    </AppShell>
  );
}
