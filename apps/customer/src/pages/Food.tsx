import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { AppShell, Button, Card, EmptyState, ListItem } from "@gozem/design-system";
import { formatXOF, merchants, orders } from "@gozem/fake-data";
import { useT } from "@gozem/i18n";
import { BackTopBar, CustomerBottomNav } from "../lib/nav";
import { FedaPayPreview } from "../components/FedaPayPreview";

const foodMerchants = merchants.filter((m) => m.category === "Restaurant");

function merchantFromParams(params: URLSearchParams) {
  const id = params.get("merchant");
  return merchants.find((m) => m.id === id) ?? foodMerchants[0] ?? merchants[0];
}

/** C-16: Food browse. */
export function FoodBrowse() {
  const { t } = useT();

  return (
    <AppShell topBar={<BackTopBar title={t("customer.food.title")} to="/home" />} bottomNav={<CustomerBottomNav current="home" />}>
      <Card style={{ background: "var(--color-primary-tint)" }}>
        <p style={{ margin: 0, fontWeight: 600 }}>{t("customer.food.promoBanner")}</p>
      </Card>
      <p style={{ fontWeight: 600 }}>{t("customer.food.weeklyTitle")}</p>
      {foodMerchants.length === 0 ? (
        <EmptyState title={t("common.empty")} />
      ) : (
        foodMerchants.map((merchant) => (
          <Link key={merchant.id} to={`/food/merchant?merchant=${merchant.id}`} style={{ textDecoration: "none", color: "inherit" }}>
            <Card>
              <p style={{ margin: 0, fontWeight: 700 }}>{merchant.name}</p>
              <p style={{ margin: 0, fontSize: 13, color: "var(--color-grey)" }}>
                {merchant.commune} · {t("customer.food.ratingLabel")} {merchant.rating}
              </p>
            </Card>
          </Link>
        ))
      )}
    </AppShell>
  );
}

/** C-17: Merchant detail + catalogue. */
export function FoodMerchantDetail() {
  const { t } = useT();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const merchant = merchantFromParams(params);

  return (
    <AppShell topBar={<BackTopBar title={merchant.name} to="/food" />}>
      <Card aria-hidden="true" style={{ height: 120, background: "var(--color-primary-tint)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>
        🍽️
      </Card>
      <Card>
        <p style={{ margin: 0, fontSize: 13, color: "var(--color-grey)" }}>
          {t("customer.food.ratingLabel")} {merchant.rating} · {merchant.commune}
        </p>
        <p style={{ margin: 0, fontSize: 13 }}>{t("customer.merchant.minOrderLabel")}: {formatXOF(1000)}</p>
        <p style={{ margin: 0, fontSize: 13 }}>{t("customer.merchant.deliveryFeeLabel")}: {formatXOF(300)}</p>
      </Card>
      <Card style={{ padding: 0 }}>
        {merchant.products.map((product) => (
          <div key={product.id} className="gz-list-item">
            <span className="gz-list-item__body">
              <p className="gz-list-item__title">{product.name}</p>
              <p className="gz-list-item__subtitle">{formatXOF(product.priceXof)}</p>
            </span>
            <button
              type="button"
              className="gz-button gz-button--secondary"
              style={{ width: "auto", minHeight: 36 }}
              onClick={() => navigate(`/food/cart?merchant=${merchant.id}`)}
            >
              {t("customer.merchant.add")}
            </button>
          </div>
        ))}
      </Card>
      <Button onClick={() => navigate(`/food/cart?merchant=${merchant.id}`)}>{t("customer.merchant.viewCart")}</Button>
    </AppShell>
  );
}

/** C-18: Cart. */
export function Cart() {
  const { t } = useT();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const merchant = merchantFromParams(params);
  const order = orders.find((o) => o.merchantId === merchant.id);
  const lines = (order?.items ?? []).map((line) => ({
    line,
    product: merchant.products.find((p) => p.id === line.productId),
  }));
  const subtotal = lines.reduce((sum, { line, product }) => sum + (product?.priceXof ?? 0) * line.quantity, 0);

  return (
    <AppShell topBar={<BackTopBar title={t("customer.cart.title")} to={`/food/merchant?merchant=${merchant.id}`} />}>
      {lines.length === 0 ? (
        <EmptyState title={t("customer.cart.emptyTitle")} description={t("customer.cart.emptyDescription")} />
      ) : (
        <>
          <Card style={{ padding: 0 }}>
            {lines.map(({ line, product }) =>
              product ? <ListItem key={line.productId} title={product.name} subtitle={`x${line.quantity} · ${formatXOF(product.priceXof)}`} /> : null
            )}
          </Card>
          <Card style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{t("customer.cart.subtotalLabel")}</span>
            <strong>{formatXOF(subtotal)}</strong>
          </Card>
          <FedaPayPreview />
          <Button onClick={() => navigate(`/food/order?merchant=${merchant.id}`)}>{t("customer.cart.checkout")}</Button>
        </>
      )}
    </AppShell>
  );
}

/** C-19: Order confirmation / tracking. */
export function FoodOrder() {
  const { t } = useT();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const merchant = merchantFromParams(params);
  const order = orders.find((o) => o.merchantId === merchant.id) ?? orders[0];

  return (
    <AppShell topBar={<BackTopBar title={t("customer.order.title")} to="/food" />}>
      <Card>
        <p style={{ margin: 0, fontWeight: 700 }}>{merchant.name}</p>
        <p style={{ margin: 0, fontSize: 13, color: "var(--color-grey)" }}>
          {t("customer.order.statusLabel")}: {order.status}
        </p>
        <p style={{ margin: 0, fontSize: 13 }}>{t("customer.order.etaLabel")}: 25-35 min</p>
      </Card>
      <Button onClick={() => navigate("/home")}>{t("customer.order.cta")}</Button>
    </AppShell>
  );
}
