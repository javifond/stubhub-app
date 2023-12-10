import { ISellerEvent } from "../interfaces/ISellerEvent";

/**
 * Given the events array and the event id, deletes the record
 * using the event id.
 * @param events
 * @param eventId
 * @returns the events without the indicated record.
 */
export function deleteEventById(events: ISellerEvent[], eventId: number) {
  const indexToDelete = events.findIndex((event) => event.id === eventId);

  if (indexToDelete !== -1) {
    events.splice(indexToDelete, 1);
  } else {
    throw new Error(`Event with ID ${eventId} not found.`);
  }

  return events;
}
