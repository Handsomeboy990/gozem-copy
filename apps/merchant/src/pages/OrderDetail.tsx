import { useState } from "react";
import { AppShell, Button, Card, TopBar } from "@gozem/design-system";
import { useT } from "@gozem/i18n";
import { formatXOF, merchants, orders, users } from "@gozem/fake-data";
import { useNavigate, useSearchParams } from "react-router-dom";

export function OrderDetail() {
  const { t } = useT();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [decision, setDecision] = useState<"pending" | "accepted" | "declined">("pending");

  const orderId = searchParams.get("id");
  const order = orders.find((o) => o.id === orderId) ?? orders[0];
  const store = merchants.find((m) => m.id === order.merchantId) ?? merchants[0];
  const customer = users.find((u) => u.role === "client");

  return (
    <AppShell topBar={<TopBar title={t("merchant.orderDetail.title")} />}>
      <Card>
        <p>
          {t("merchant.orderDetail.number")} {order.id}
        </p>
        <p>
          {t("merchant.orderDetail.prepFor")}: 12:39 · {t("merchant.orderDetail.remaining")}: 15 min
        </p>
        <p>
          {t("merchant.orderDetail.customer")}: {customer?.fullName}
        </p>
      </Card>
      <Card>
        {order.items.map((item) => {
          const product = store.products.find((p) => p.id === item.productId);
          if (!product) return null;
          return (
            <p key={item.productId}>
              {item.quantity} x {product.name} - {formatXOF(product.priceXof * item.quantity)}
            </p>
          );
        })}
        <p>
          <strong>{t("merchant.orderDetail.subtotal")}</strong>: {formatXOF(order.totalXof)}
        </p>
        <p>
          <strong>{t("merchant.orderDetail.total")}</strong>: {formatXOF(order.totalXof)}
        </p>
      </Card>
      {decision === "pending" ? (
        <Card>
          <Button type="button" onClick={() => setDecision("accepted")}>
            {t("merchant.orderDetail.accept")}
          </Button>
          <Button type="button" variant="secondary" onClick={() => setDecision("declined")}>
            {t("merchant.orderDetail.decline")}
          </Button>
        </Card>
      ) : (
        <Card>
          <p role="status">{decision === "accepted" ? t("merchant.orderDetail.accepted") : t("merchant.orderDetail.decline")}</p>
          <Button type="button" onClick={() => navigate("/orders")}>
            {t("common.close")}
          </Button>
        </Card>
      )}
    </AppShell>
  );
}
