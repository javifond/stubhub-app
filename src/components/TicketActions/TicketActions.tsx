import styles from "./TicketActions.module.scss";

const TicketActions = () => {
  return (
    <div className={styles.ticketItem}>
      <ul className={styles.ticketActions}>
        <li className={styles.actionItem}>
          <a href="#">
            <i className="fa fa-files-o"></i>
            <span>Duplicate</span>
          </a>
        </li>
        <li className={styles.actionItem}>
          <a href="#">
            <i className="fa fa-trash"></i>
            <span>Remove</span>
          </a>
        </li>
        <li className={styles.actionItem}>
          <a href="#">
            <i className="fa fa-eye"></i>
            <span>Activate</span>
          </a>
        </li>
        <li className={styles.actionItem}>
          <a href="#">
            <i className="fa fa-eye-slash"></i>
            <span>Deactivate</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TicketActions;
