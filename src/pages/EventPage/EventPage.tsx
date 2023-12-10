import { useQuery } from "../../hooks/useQuery";
import { useFetchTicketsByEvent } from "../../hooks/useFetchTicketsByEvent";
import { useFetchEventById } from "../../hooks/useFetchEventById";
import TicketsTable from "../../components/TicketsTable/TicketsTable";
import Loader from "../../components/Loader/Loader";

import styles from "./EventPage.module.scss";

const EventPage = () => {
  const eventId = useQuery().get("eventId");
  const { event } = useFetchEventById(eventId);
  const { tickets, loading, error } = useFetchTicketsByEvent(eventId);

  // TODO[JB]: Implement a better error UX/UI,
  // the component will not appear.
  // Maybe a toast could be a good option.
  if (!tickets || error) return;

  return (
    <div className={styles.container}>
      {loading && <Loader />}
      {!loading && (
        <>
          {event && <h2 className={styles.title}>{event.title}</h2>}
          <TicketsTable tickets={tickets} />
        </>
      )}
    </div>
  );
};

export default EventPage;
