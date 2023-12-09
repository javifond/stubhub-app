import { test, expect } from "vitest";
import { extractEventIdsFromSellerTickets } from "./extractEventIds";
import { MOCK_TICKETS_BY_SELLER } from "../mockData/tickets";
import { ITicket } from "../interfaces/ITicket";

test("returns an array of eventIds when given an array of tickets", () => {
  const result = extractEventIdsFromSellerTickets(MOCK_TICKETS_BY_SELLER);
  expect(result).toEqual([320, 236]);
});

test("returns an empty array when tickets parameter is null", () => {
  const tickets: ITicket[] = [];
  const result = extractEventIdsFromSellerTickets(tickets);
  expect(result).toEqual([]);
});
