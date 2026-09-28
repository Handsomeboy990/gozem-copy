/**
 * Display-only order number derived from the fake-data order id (e.g.
 * "order-1"), so the UI shows a realistic reference like "2264" instead of
 * the raw id. The underlying id is untouched (still used for lookups,
 * routing and data-testid).
 */
export function formatOrderNumber(id: string): string {
  const digits = id.replace(/\D/g, "");
  const n = digits.length > 0 ? parseInt(digits, 10) : 0;
  return String(2260 + n);
}
