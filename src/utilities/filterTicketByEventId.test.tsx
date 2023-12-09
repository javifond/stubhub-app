import { test, expect } from "vitest";
import { filterTicketByEventId } from "./filterTicketByEventId";
import { MOCK_TICKETS_BY_SELLER } from "../mockData/tickets";

test("should return the correct ticket when the eventId matches", () => {
  const result = filterTicketByEventId(MOCK_TICKETS_BY_SELLER, 320);
  expect(result).toEqual({
    sellerId: 1,
    eventId: 320,
    id: 1,
    quantity: 8,
    unit_price: 7,
    status: false,
  });
});

test("should return undefined when no ticket matches the eventId", () => {
  const result = filterTicketByEventId(MOCK_TICKETS_BY_SELLER, 30);
  expect(result).toBeUndefined();
});
