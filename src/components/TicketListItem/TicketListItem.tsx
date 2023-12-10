import { useState } from "react";
import { ITicketListAction } from "../../interfaces/ITicketListAction";
import { transformDateFormat } from "../../utilities/transformDateFormat";
import TicketActions from "../TicketActions/TicketActions";
import { ISellerEvent } from "../../interfaces/ISellerEvent";

import styles from "./TicketListItem.module.scss";

type TicketListItemProps = {
  event: ISellerEvent;
  dispatch: React.Dispatch<ITicketListAction>;
};

const TicketListItem = ({ event, dispatch }: TicketListItemProps) => {
  const {
    id,
    thumbnailImageUrl,
    title,
    date,
    venueName,
    city,
    country,
    status,
  } = event;
  const formattedDate = transformDateFormat(date);
  const [ticketStatus, setTicketStatus] = useState<boolean>(status);

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
            ticketStatus ? styles.isActive : styles.isInactive
          }`}
        >
          {ticketStatus ? "Active" : "Inactive"}
        </strong>
      </div>

      <TicketActions
        eventId={id}
        ticketStatus={ticketStatus}
        setTicketStatus={setTicketStatus}
        dispatch={dispatch}
      />
    </li>
  );
};

export default TicketListItem;
