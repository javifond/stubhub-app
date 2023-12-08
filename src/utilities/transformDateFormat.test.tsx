import { test, expect } from "vitest";
import { transformDateFormat } from "./transformDateFormat";

test("Transforms ISO date format to specified format", () => {
  const isoDate = "2023-04-11T02:01:26.000Z";
  const transformedDate = transformDateFormat(isoDate);
  expect(transformedDate).toBe("2023-04-11 02:01");
});
