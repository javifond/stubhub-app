import { TicketListReducerActions } from "../reducers/TicketListReducer/TicketListReducer.actions";
import { ISellerEvent } from "./ISellerEvent";

export interface ITicketListAction {
  type: TicketListReducerActions;
  payload: {
    events?: ISellerEvent[];
    eventId?: number;
  };
}
