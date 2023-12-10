import { ISellerEvent } from "../interfaces/ISellerEvent";
import { getRandomUserId } from "./getRandomUserId";

/**
 *
 * @param events
 * @param eventId
 * @returns
 */
export function duplicateEventById(events: ISellerEvent[], eventId: number) {
  const eventToDuplicate = events?.find((event) => event.id === eventId);

  // We can come up with a more sophisticated method to
  // generate the event id, but ideally this is responsibility
  // of the BE as they handle the record id generation.
  if (eventToDuplicate) {
    const duplicatedEvent = {
      ...eventToDuplicate,
      id: getRandomUserId(4000, 10000),
    };
    events.push(duplicatedEvent);
  } else {
    throw new Error(`Event with ID ${eventId} not found.`);
  }

  return events;
}
