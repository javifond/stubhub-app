import { test, expect } from "vitest";
import { deleteEventById } from "./deleteEventById";
import { MOCK_EVENTS_BY_SELLER } from "../mockData/events";

test("should delete the event with the given ID", () => {
  const eventIdToDelete = 320;
  const result = deleteEventById(MOCK_EVENTS_BY_SELLER, eventIdToDelete);

  expect(result).toHaveLength(1);
  expect(result[0]).toEqual(MOCK_EVENTS_BY_SELLER[0]);
});

test("should throw an error if the event with the given ID is not found", () => {
  const eventIdToDelete = 2;

  expect(() =>
    deleteEventById(MOCK_EVENTS_BY_SELLER, eventIdToDelete)
  ).toThrowError(`Event with ID ${eventIdToDelete} not found.`);
});
