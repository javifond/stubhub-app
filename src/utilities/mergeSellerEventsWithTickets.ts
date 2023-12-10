import { IEvent } from "../interfaces/IEvent";
import { ISellerEvent } from "../interfaces/ISellerEvent";
import { ITicket } from "../interfaces/ITicket";
import { filterTicketByEventId } from "./filterTicketByEventId";

export function mergeSellerEventsWithTickets(
  events: IEvent[],
  tickets: ITicket[]
): ISellerEvent[] {
  const sellerEvents: ISellerEvent[] = [];

  events.forEach((event) => {
    const correspondingTicket = filterTicketByEventId(tickets, event.id);

    if (correspondingTicket) {
      const { sellerId, quantity, unit_price, status } = correspondingTicket;
      const sellerEvent: ISellerEvent = {
        ...event,
        sellerId,
        quantity,
        unit_price,
        status,
      };
      sellerEvents.push(sellerEvent);
    }
  });

  return sellerEvents;
}
