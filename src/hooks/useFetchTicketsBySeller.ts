import { useState, useEffect } from "react";
import { ITicket } from "../interfaces/ITicket";
import { API_ENDPOINTS } from "../api/endpoints";

export const useFetchTicketsBySeller = (id: number | null) => {
  const [tickets, setTickets] = useState<ITicket[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getTicketsBySeller = async (): Promise<ITicket[]> => {
      const events = await fetch(
        `${API_ENDPOINTS.DOMAIN}/${API_ENDPOINTS.TICKETS}?sellerId=${id}`
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
          setTickets([]);
        })
        .finally(() => {
          setLoading(false);
        });

      return events;
    };

    getTicketsBySeller().then((events) => {
      setTickets(events);
      setError(null);
    });
  }, [id]);

  return { tickets, loading, error };
};
