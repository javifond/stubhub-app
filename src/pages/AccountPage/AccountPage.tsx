import { useState, useEffect } from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import TicketList from "../../components/TicketList/TicketList";
import { useFetchTicketsBySeller } from "../../hooks/useFetchTicketsBySeller";
import { useLoggedUser } from "../../hooks/useLoggedUser";
import { extractEventIdsFromSellerTickets } from "../../utilities/extractEventIds";
import { IEvent } from "../../interfaces/IEvent";
import { getSellerEvents } from "../../api/methods/getSellerEvents";

import styles from "./AccountPage.module.scss";

const AccountPage = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const { userId } = useLoggedUser();
  const { tickets } = useFetchTicketsBySeller(userId);

  useEffect(() => {
    const eventIds = extractEventIdsFromSellerTickets(tickets);

    getSellerEvents(eventIds).then((events) => {
      setEvents(events);
    });
  }, [tickets]);

  return (
    <main>
      <div className={styles.container}>
        <SearchBox />
        <h2 className={styles.title}>Tickets</h2>
        <TicketList events={events} tickets={tickets} />
      </div>
    </main>
  );
};

export default AccountPage;
