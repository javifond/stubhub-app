import { useState, useEffect } from "react";
import { IEvent } from "../interfaces/IEvent";
import { getEventById } from "../api/methods/getEventById";

export const useFetchEventById = (id: number | string | null) => {
  const [event, setEvent] = useState<IEvent | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getEventById(id)
      .then((event) => {
        setEvent(event);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setEvent(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return { event, loading, error };
};
