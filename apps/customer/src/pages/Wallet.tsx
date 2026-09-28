import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppShell, Button, Card, ListItem } from "@gozem/design-system";
import { formatXOF, walletRechargeMaxXof, walletRechargeMinXof, walletTx } from "@gozem/fake-data";
import { useT } from "@gozem/i18n";
import { BackTopBar, CustomerBottomNav } from "../lib/nav";

const balanceXof = walletTx.reduce((sum, tx) => sum + (tx.type === "credit" ? tx.amountXof : -tx.amountXof), 0);

function formatDate(iso: string, lang: string) {
  return new Date(iso).toLocaleDateString(lang === "en" ? "en-GB" : "fr-FR", { day: "2-digit", month: "short" });
}

/** C-13: Wallet. */
export function Wallet() {
  const { t, lang } = useT();
  const navigate = useNavigate();

  return (
    <AppShell topBar={<BackTopBar title={t("customer.wallet.title")} to="/home" />} bottomNav={<CustomerBottomNav current="home" />}>
      <Card style={{ textAlign: "center", background: "var(--color-primary-tint)" }}>
        <p style={{ margin: 0, fontSize: 13, color: "var(--color-grey)" }}>{t("customer.wallet.balanceLabel")}</p>
        <p style={{ margin: 0, fontSize: 28, fontWeight: 700 }}>{formatXOF(balanceXof)}</p>
        <div style={{ marginTop: "var(--space-3)" }}>
          <Button onClick={() => navigate("/wallet/recharge")}>{t("customer.wallet.recharge")}</Button>
        </div>
      </Card>

      <Card>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontWeight: 600, margin: 0 }}>{t("customer.wallet.recentTitle")}</p>
          <button type="button" className="gz-button gz-button--ghost" style={{ width: "auto", minHeight: 32 }} onClick={() => navigate("/wallet/history")}>
            {t("common.seeAll")}
          </button>
        </div>
        {walletTx.length === 0 ? (
          <p>{t("customer.wallet.emptyTitle")}</p>
        ) : (
          walletTx
            .slice(0, 3)
            .map((tx) => (
              <ListItem
                key={tx.id}
                title={tx.label}
                subtitle={formatDate(tx.createdAt, lang)}
                icon={<span aria-hidden="true">{tx.type === "credit" ? "+" : "-"}</span>}
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
