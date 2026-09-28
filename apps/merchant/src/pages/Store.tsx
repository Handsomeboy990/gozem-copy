import { AppShell, Card, ListItem, TopBar } from "@gozem/design-system";
import { useT } from "@gozem/i18n";
import { formatXOF, merchants } from "@gozem/fake-data";

const MIN_ORDER_XOF = 1500;
const DELIVERY_FEE_XOF = 500;

export function Store() {
  const { t } = useT();
  const store = merchants[0];

  return (
    <AppShell topBar={<TopBar title={t("merchant.store.title")} />}>
      <Card>
        <p style={{ fontSize: "1.25rem", fontWeight: 700 }}>{store.name}</p>
        <p>
          {store.category} · {store.commune}
        </p>
        <p>
          {t("merchant.store.rating")}: {store.rating.toFixed(1)}
        </p>
        <p>
          {t("merchant.store.minOrder")}: {formatXOF(MIN_ORDER_XOF)}
        </p>
        <p>
          {t("merchant.store.deliveryFee")}: {formatXOF(DELIVERY_FEE_XOF)}
        </p>
      </Card>
      <Card>
        <h2 style={{ fontSize: "1rem" }}>{t("merchant.store.products")}</h2>
        {store.products.map((product) => (
          <ListItem key={product.id} title={product.name} subtitle={`${product.category} · ${formatXOF(product.priceXof)}`} />
        ))}
      </Card>
    </AppShell>
  );
}
