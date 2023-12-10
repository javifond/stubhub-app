import { test, expect } from "vitest";
import { mergeSellerEventsWithTickets } from "./mergeSellerEventsWithTickets";
import { MOCK_TICKETS_BY_SELLER } from "../mockData/tickets";
import { MOCK_EVENTS, MOCK_EVENTS_BY_SELLER } from "../mockData/events";

test("should merge events with corresponding tickets", () => {
  const events = MOCK_EVENTS;
  const tickets = MOCK_TICKETS_BY_SELLER;

  const result = mergeSellerEventsWithTickets(events, tickets);

  expect(result).toHaveLength(2);

  expect(result[0]).toEqual(MOCK_EVENTS_BY_SELLER[0]);

  expect(result[1]).toEqual(MOCK_EVENTS_BY_SELLER[1]);
});
