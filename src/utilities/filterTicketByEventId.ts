import { ITicket } from "../interfaces/ITicket";

/**
 * Given an array of tickets gets the corresponding
 * ticket by eventId
 * @param tickets
 * @param eventId
 * @returns the ticket by its eventId
 */
export function filterTicketByEventId(tickets: ITicket[], eventId: number) {
  return tickets.find((ticket) => ticket.eventId === eventId);
}
