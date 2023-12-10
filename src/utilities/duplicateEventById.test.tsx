import { test, expect } from "vitest";
import { duplicateEventById } from "./duplicateEventById";
import { MOCK_EVENTS_BY_SELLER } from "../mockData/events";

test("should duplicate the event with the given ID", () => {
  const eventIdToDuplicate = 320;
  const result = duplicateEventById(MOCK_EVENTS_BY_SELLER, eventIdToDuplicate);

  expect(result).toHaveLength(3);
  expect(result[2].id).not.toBe(result[0].id);
  // TODO[JB]: This test needs more work to compare the resultant objects.
});

test("should throw an error if the event with the given ID is not found", () => {
  const eventIdToDuplicate = 2;

  expect(() =>
    duplicateEventById(MOCK_EVENTS_BY_SELLER, eventIdToDuplicate)
  ).toThrowError(`Event with ID ${eventIdToDuplicate} not found.`);
});
