import { useState, useEffect } from "react";
import { ITicket } from "../interfaces/ITicket";
import { API_ENDPOINTS } from "../api/endpoints";

export const useFetchTicketsByEvent = (id: string | null) => {
  const [tickets, setTickets] = useState<ITicket[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getTicketsByEvent = async (): Promise<ITicket[]> => {
      const events = await fetch(
        `${API_ENDPOINTS.DOMAIN}/${API_ENDPOINTS.TICKETS}?eventId=${id}&status=true`
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
          setTickets(null);
        })
        .finally(() => {
          setLoading(false);
        });

      return events;
    };

    getTicketsByEvent().then((events) => {
      setTickets(events);
      setError(null);
    });
  }, [id]);

  return { tickets, loading, error };
};
