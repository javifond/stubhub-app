import { IEvent } from "../../interfaces/IEvent";
import { ITicket } from "../../interfaces/ITicket";
import TicketListItem from "../TicketListItem/TicketListItem";
import { filterTicketByEventId } from "../../utilities/filterTicketByEventId";

type TicketListProps = {
  events: IEvent[];
  tickets: ITicket[];
};

const TicketList = ({ events, tickets }: TicketListProps) => {
  return (
    <ul>
      {events.map((event, i) => {
        const ticket = filterTicketByEventId(tickets, event.id) as ITicket;

        return <TicketListItem key={i} event={event} ticket={ticket} />;
      })}
    </ul>
  );
};

export default TicketList;
