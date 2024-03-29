import { useState, useEffect } from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import TicketList from "../../components/TicketList/TicketList";
import { useFetchTicketsBySeller } from "../../hooks/useFetchTicketsBySeller";
import { useLoggedUser } from "../../hooks/useLoggedUser";
import { extractEventIdsFromSellerTickets } from "../../utilities/extractEventIds";
import { IEvent } from "../../interfaces/IEvent";
import { getSellerEvents } from "../../api/methods/getSellerEvents";
import Loader from "../../components/Loader/Loader";

import styles from "./AccountPage.module.scss";

const AccountPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [events, setEvents] = useState<IEvent[]>([]);
  const { userId } = useLoggedUser();
  const { tickets } = useFetchTicketsBySeller(userId);

  useEffect(() => {
    const eventIds = extractEventIdsFromSellerTickets(tickets);

    getSellerEvents(eventIds).then((events) => {
      setEvents(events);
      setLoading(events.length === 0);
    });
  }, [tickets]);

  return (
    <div className={styles.container}>
      <SearchBox />
      <h2 className={styles.title}>Tickets</h2>
      {loading && <Loader />}
      {!loading && <TicketList events={events} tickets={tickets} />}
    </div>
  );
};

export default AccountPage;
