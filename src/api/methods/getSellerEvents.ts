import { getEventById } from "./getEventById";

export const getSellerEvents = async (eventIds: number[]) => {
  try {
    if (!eventIds) return [];

    const promises = eventIds.map((eventId) => getEventById(eventId));
    const resolvedData = await Promise.all(promises);

    return resolvedData;
  } catch (error) {
    throw Error("Promise failed");
  }
};
