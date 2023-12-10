import { ITicketListAction } from "../../interfaces/ITicketListAction";
import { TicketListReducerActions } from "../../reducers/TicketListReducer/TicketListReducer.actions";
import styles from "./TicketActions.module.scss";

type TicketActionsProps = {
  eventId: number;
  ticketStatus: boolean;
  setTicketStatus: React.Dispatch<React.SetStateAction<boolean>>;
  dispatch: React.Dispatch<ITicketListAction>;
};

const TicketActions = ({
  eventId,
  ticketStatus,
  setTicketStatus,
  dispatch,
}: TicketActionsProps) => {
  return (
    <div className={styles.ticketItem}>
      <button
        className={styles.button}
        onClick={() =>
          dispatch({
            type: TicketListReducerActions.DUPLICATE,
            payload: { eventId },
          })
        }
      >
        <i className="fa fa-files-o"></i>
        <span className={styles.iconText}>Duplicate</span>
      </button>

      <button
        className={styles.button}
        onClick={() =>
          dispatch({
            type: TicketListReducerActions.DELETE,
            payload: { eventId },
          })
        }
      >
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
