import { useQuery } from "../../hooks/useQuery";
import { useFetchTicketsByEvent } from "../../hooks/useFetchTicketsByEvent";
import { useFetchEventById } from "../../hooks/useFetchEventById";
import TicketsTable from "../../components/TicketsTable/TicketsTable";

import styles from "./EventPage.module.scss";

const EventPage = () => {
  const eventId = useQuery().get("eventId");
  const { event } = useFetchEventById(eventId);
  const { tickets, loading, error } = useFetchTicketsByEvent(eventId);

  // TODO[JB]: Implement a better loading and error UX/UI,
  // as if the data takes longer to load or there is an error,
  // the component will not appear.
  if (!tickets || loading || error) return;

  return (
    <main>
      <div className={styles.container}>
        {event && <h2 className={styles.title}>{event.title}</h2>}
        <TicketsTable tickets={tickets} />
      </div>
    </main>
  );
};

export default EventPage;
