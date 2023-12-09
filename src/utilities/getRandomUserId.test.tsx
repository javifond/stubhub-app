import { test, expect } from "vitest";
import { getRandomUserId } from "./getRandomUserId";

test("should return a random integer between 1 and 10", () => {
  const randomNumber = getRandomUserId(1, 10);
  expect(randomNumber).toBeGreaterThanOrEqual(1);
  expect(randomNumber).toBeLessThanOrEqual(10);
});

test("should return an integer", () => {
  const randomNumber = getRandomUserId(1, 10);
  expect(randomNumber % 1).toBe(0);
});

test("should return 1 when min and max are both 1", () => {
  const randomNumber = getRandomUserId(1, 1);
  expect(randomNumber).toBe(1);
});
