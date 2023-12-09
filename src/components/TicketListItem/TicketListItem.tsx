import { IEvent } from "../../interfaces/IEvent";
import { ITicket } from "../../interfaces/ITicket";
import { transformDateFormat } from "../../utilities/transformDateFormat";
import TicketActions from "../TicketActions/TicketActions";

import styles from "./TicketListItem.module.scss";

type TicketListItemProps = {
  event: IEvent;
  ticket: ITicket;
};

const TicketListItem = ({ event, ticket }: TicketListItemProps) => {
  const { thumbnailImageUrl, title, date, venueName, city, country } = event;
  const formattedDate = transformDateFormat(date);
  const { status } = ticket;

  return (
    <li className={styles.ticketListItem}>
      <div className={styles.ticketEvent}>
        <img className={styles.eventImage} src={thumbnailImageUrl} />
        <div className={styles.eventInfo}>
          <h4 className={styles.eventTitle}>{title}</h4>
          <time className={styles.dateTime} dateTime={formattedDate}>
            {formattedDate}
          </time>
          <span>{`${venueName}, ${city}, ${country}`}</span>
        </div>
        <strong
          className={`${styles.status} ${
            status ? styles.isActive : styles.isInactive
          }`}
        >
          {status ? "Active" : "Inactive"}
        </strong>
      </div>

      <TicketActions />
    </li>
  );
};

export default TicketListItem;
