/**
 * Formats a provided amount into a de-DE format, ie:
 *
 * 9.99 into 9,99 €
 * @param amount
 * @returns the provided amount in euros.
 */
export function formatCurrencyInEuros(amount: number): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
}
