import { ITicket } from "../../interfaces/ITicket";
import { formatCurrencyInEuros } from "../../utilities/formatCurrencyInEuros";

import styles from "./TicketTableItem.module.scss";

type TicketTableItemProp = {
  ticket: ITicket;
};
const TicketTableItem = ({ ticket }: TicketTableItemProp) => {
  const { quantity, unit_price } = ticket;
  return (
    <tr className={styles.row}>
      <td className={styles.location}>
        <span className={styles.name}>Ticket name</span>
        <span className={styles.ticketLocation}>
          <span className={styles.seat}>Sector: ###</span>
          <span className={styles.seat}>Row: ##</span>
        </span>
      </td>
      <td>{quantity}</td>
      <td>
        <span>{formatCurrencyInEuros(unit_price)}</span>
      </td>
      <td className={styles.action}>
        <a href="#" className={styles.buyButton}>
          <span>Buy</span>
        </a>
      </td>
    </tr>
  );
};

export default TicketTableItem;
