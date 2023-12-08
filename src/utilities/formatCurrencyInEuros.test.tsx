// Reference for issue with the special characters.
// https://stackoverflow.com/questions/54242039/intl-numberformat-space-character-does-not-match

import { test, expect } from "vitest";
import { formatCurrencyInEuros } from "./formatCurrencyInEuros";

test("should format 497.00 to 497,00 €", () => {
  const result = formatCurrencyInEuros(497.0);
  expect(result.replace(/\xa0/g, " ").replace(/\u202f/g, " ")).toBe("497,00 €");
});
