import { IEvent } from "../../interfaces/IEvent";
import { ITicket } from "../../interfaces/ITicket";
import TicketListItem from "../TicketListItem/TicketListItem";
import { useEffect, useReducer } from "react";
import { TicketListReducer } from "../../reducers/TicketListReducer/TicketListReducer";
import { TicketListReducerActions } from "../../reducers/TicketListReducer/TicketListReducer.actions";
import { mergeSellerEventsWithTickets } from "../../utilities/mergeSellerEventsWithTickets";
import { ISellerEvent } from "../../interfaces/ISellerEvent";

type TicketListProps = {
  events: IEvent[];
  tickets: ITicket[];
};

const TicketList = ({ events, tickets }: TicketListProps) => {
  const [state, dispatch] = useReducer(TicketListReducer, {});

  useEffect(() => {
    const sellerEvents: ISellerEvent[] = mergeSellerEventsWithTickets(
      events,
      tickets
    );

    dispatch({
      type: TicketListReducerActions.UPDATE_LIST,
      payload: { events: sellerEvents },
    });
  }, [events, tickets]);

  return (
    <ul>
      {state &&
        state.events &&
        state.events.map((event, i) => {
          return <TicketListItem key={i} event={event} dispatch={dispatch} />;
        })}
    </ul>
  );
};

export default TicketList;
