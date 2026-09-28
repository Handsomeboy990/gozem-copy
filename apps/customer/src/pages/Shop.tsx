import { useNavigate } from "react-router-dom";
import { AppShell, Card } from "@gozem/design-system";
import { formatXOF, merchants } from "@gozem/fake-data";
import { useT } from "@gozem/i18n";
import { BackTopBar, CustomerBottomNav } from "../lib/nav";

const shopMerchants = merchants.filter((m) => m.category !== "Restaurant");

/** C-22: Shop (Achats) browse. Reuses the food cart/order pattern per spec section 2.1. */
export function ShopBrowse() {
  const { t } = useT();
  const navigate = useNavigate();

  return (
    <AppShell topBar={<BackTopBar title={t("customer.shop.title")} to="/home" />} bottomNav={<CustomerBottomNav current="home" />}>
      <p style={{ fontWeight: 600 }}>{t("customer.shop.categoriesTitle")}</p>
      {shopMerchants.map((merchant) => (
        <Card key={merchant.id}>
          <p style={{ margin: 0, fontWeight: 700 }}>{merchant.name}</p>
          <p style={{ margin: 0, fontSize: 13, color: "var(--color-grey)" }}>{merchant.commune}</p>
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
      ))}
    </AppShell>
  );
}
