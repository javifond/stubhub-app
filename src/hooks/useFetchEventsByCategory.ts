import { useState, useEffect } from "react";
import { IEvent } from "../interfaces/IEvent";
import { API_ENDPOINTS } from "../api/endpoints";

export const useFetchEventsByCategory = (id: string | undefined) => {
  const [events, setEvents] = useState<IEvent[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getEventsByCategory = async (): Promise<IEvent[]> => {
      const events = await fetch(
        `${API_ENDPOINTS.DOMAIN}/${API_ENDPOINTS.CATEGORIES}/${id}/${API_ENDPOINTS.EVENTS}`
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error(
              `This is an HTTP error: The status is ${res.status}`
            );
          }

          return res.json();
        })
        .catch((err) => {
          if (err instanceof Error) console.log(err.message);
          setError(err.message);
          setEvents(null);
        })
        .finally(() => {
          setLoading(false);
        });

      return events;
    };

    getEventsByCategory().then((events) => {
      setEvents(events);
      setError(null);
    });
  }, [id]);

  return { events, loading, error };
};
