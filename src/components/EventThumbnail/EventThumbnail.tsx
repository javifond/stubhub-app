import { IEvent } from "../../interfaces/IEvent";
import { transformDateFormat } from "../../utilities/transformDateFormat";

import styles from "./EventThumbnail.module.scss";

type EventThumbnailProps = {
  event: IEvent;
};
const EventThumbnail = ({ event }: EventThumbnailProps) => {
  const { title, thumbnailImageUrl, venueName, city, date } = event;
  const formattedDate = transformDateFormat(date);

  return (
    <li className={styles.eventListItem}>
      <div className={styles.eventItem}>
        <a className={styles.eventThumb} href="#">
          <div className={styles.eventTitle}>
            <strong>{title}</strong>
          </div>
          <img
            className={styles.eventImage}
            src={thumbnailImageUrl}
            alt={title}
          />
        </a>
      </div>
      <div className={styles.eventDetails}>
        <div>
          <span itemProp="name">{venueName}</span>
        </div>
        <div>
          <span className={styles.iconWrapper}>
            <i className="fa fa-map-marker"></i>
            {city}
          </span>
        </div>
        <time dateTime={formattedDate}>
          <div className={styles.iconWrapper}>
            <i className="fa fa-calendar"></i>
            {formattedDate}
          </div>
        </time>
        <div className={styles.eventActions}>
          <a href="#" className={styles.eventBuyButton}>
            Buy
          </a>
        </div>
      </div>
    </li>
  );
};

export default EventThumbnail;
