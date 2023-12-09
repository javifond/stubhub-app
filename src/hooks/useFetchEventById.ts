import { useState, useEffect } from "react";
import { IEvent } from "../interfaces/IEvent";
import { API_ENDPOINTS } from "../api/endpoints";

export const useFetchEventById = (id: string | null) => {
  const [event, setEvent] = useState<IEvent | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getEventById = async (): Promise<IEvent> => {
      const event = await fetch(
        `${API_ENDPOINTS.DOMAIN}/${API_ENDPOINTS.EVENTS}/${id}`
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
          setEvent(null);
        })
        .finally(() => {
          setLoading(false);
        });

      return event;
    };

    getEventById().then((event) => {
      setEvent(event);
      setError(null);
    });
  }, [id]);

  return { event, loading, error };
};
