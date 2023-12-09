import { API_ENDPOINTS } from "../../api/endpoints";
import { IEvent } from "../../interfaces/IEvent";

export const getEventById = async (
  eventId: number | string | null
): Promise<IEvent> => {
  const event = await fetch(
    `${API_ENDPOINTS.DOMAIN}/${API_ENDPOINTS.EVENTS}/${eventId}`
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error(`This is an HTTP error: The status is ${res.status}`);
      }

      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });

  return event;
};
