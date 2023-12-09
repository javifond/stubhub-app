import styles from "./TicketActions.module.scss";

type TicketActionsProps = {
  ticketStatus: boolean;
  setTicketStatus: React.Dispatch<React.SetStateAction<boolean>>;
};

const TicketActions = ({
  ticketStatus,
  setTicketStatus,
}: TicketActionsProps) => {
  return (
    <div className={styles.ticketItem}>
      <button className={styles.button}>
        <i className="fa fa-files-o"></i>
        <span className={styles.iconText}>Duplicate</span>
      </button>

      <button className={styles.button}>
        <i className="fa fa-trash"></i>
        <span className={styles.iconText}>Remove</span>
      </button>

      <button
        className={styles.button}
        disabled={ticketStatus}
        onClick={() => setTicketStatus(true)}
      >
        <i className="fa fa-eye"></i>
        <span className={styles.iconText}>Activate</span>
      </button>

      <button
        className={styles.button}
        disabled={!ticketStatus}
        onClick={() => setTicketStatus(false)}
      >
        <i className="fa fa-eye-slash"></i>
        <span className={styles.iconText}>Deactivate</span>
      </button>
    </div>
  );
};

export default TicketActions;
