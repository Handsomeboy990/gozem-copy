import { useState, type FormEvent } from "react";
import { AdminLayout } from "../components/AdminLayout";
import { Card, ListItem, Button, Input, EmptyState } from "@gozem/design-system";
import { useT } from "@gozem/i18n";
import { formatXOF } from "@gozem/fake-data";
import { promoCodes, initialBanners, type BannerItem } from "../data/queues";

/** A-07: content management, promo codes (C-26) and banners. */
export function Content() {
  const { t } = useT();
  const [banners, setBanners] = useState<BannerItem[]>(initialBanners);
  const [bannerTitle, setBannerTitle] = useState("");

  function handleAddBanner(event: FormEvent) {
    event.preventDefault();
    const title = bannerTitle.trim();
    if (!title) return;
    setBanners((prev) => [...prev, { id: `banner-${prev.length + 1}`, title }]);
    setBannerTitle("");
  }

  return (
    <AdminLayout title={t("admin.content.title")}>
      <p>{t("admin.content.subtitle")}</p>

      <h2>{t("admin.content.promoCodes")}</h2>
      {promoCodes.length === 0 ? (
        <EmptyState title={t("common.empty")} />
      ) : (
        promoCodes.map((promo) => (
          <Card key={promo.code}>
            <ListItem title={promo.code} subtitle={`${promo.label} · ${formatXOF(promo.discountXof)}`} />
          </Card>
        ))
      )}

      <h2>{t("admin.content.banners")}</h2>
      {banners.map((banner) => (
        <Card key={banner.id}>
          <ListItem title={banner.title} />
        </Card>
      ))}
      <Card>
        <form onSubmit={handleAddBanner} noValidate>
          <Input
            label={t("admin.content.newBannerLabel")}
            value={bannerTitle}
            onChange={(event) => setBannerTitle(event.target.value)}
          />
          <Button type="submit">{t("admin.content.addBanner")}</Button>
        </form>
      </Card>
    </AdminLayout>
  );
}
