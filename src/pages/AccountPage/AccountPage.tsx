import SearchBox from "../../components/SearchBox/SearchBox";
import TicketList from "../../components/TicketList/TicketList";
import { MOCK_EVENTS } from "../../mockData/events";

import styles from "./AccountPage.module.scss";

const AccountPage = () => {
  return (
    <main>
      <div className={styles.container}>
        <SearchBox />
        <h2 className={styles.title}>Tickets</h2>
        <TicketList events={MOCK_EVENTS} />
      </div>
    </main>
  );
};

export default AccountPage;
