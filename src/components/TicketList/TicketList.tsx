import { IEvent } from "../../interfaces/IEvent";
import TicketListItem from "../TicketListItem/TicketListItem";

type TicketListProps = {
  events: IEvent[];
};

const TicketList = ({ events }: TicketListProps) => {
  return (
    <ul>
      {events.map((event, i) => (
        <TicketListItem key={i} event={event} />
      ))}
    </ul>
  );
};

export default TicketList;
