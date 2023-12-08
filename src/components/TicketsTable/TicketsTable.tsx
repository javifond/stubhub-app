import TicketTableItem from "../TicketTableItem/TicketTableItem";
import { ITicket } from "../../interfaces/ITicket";

import styles from "./TicketsTable.module.scss";

type TicketsTableProps = {
  tickets: ITicket[];
};

const TicketsTable = ({ tickets }: TicketsTableProps) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Locality</th>
          <th>Available</th>
          <th>Price per Ticket</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((ticket, i) => (
          <TicketTableItem key={i} ticket={ticket} />
        ))}
      </tbody>
    </table>
  );
};

export default TicketsTable;
