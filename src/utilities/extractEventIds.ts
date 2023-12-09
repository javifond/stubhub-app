import { ITicket } from "../interfaces/ITicket";

/**
 * Extracts all the eventId from the seller tickets.
 * @param tickets
 * @returns an array of eventIds
 */
export function extractEventIdsFromSellerTickets(tickets: ITicket[]) {
  if (!tickets) return [];

  return tickets.map((ticket) => ticket.eventId);
}
