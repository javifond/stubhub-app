import TicketsTable from "../../components/TicketsTable/TicketsTable";
import { MOCK_TICKETS } from "../../mockData/tickets";

import styles from "./EventPage.module.scss";

const EventPage = () => {
  return (
    <main>
      <div className={styles.container}>
        {/* TODO[JB]: The name of the event should be passed as prop or with the router TBD */}
        <h2 className={styles.title}>Event Name</h2>
        <TicketsTable tickets={MOCK_TICKETS} />
      </div>
    </main>
  );
};

export default EventPage;
