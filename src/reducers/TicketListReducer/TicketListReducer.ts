import { TicketListReducerActions } from "./TicketListReducer.actions";
import { ITicketListAction } from "../../interfaces/ITicketListAction";
import { duplicateEventById } from "../../utilities/duplicateEventById";
import { deleteEventById } from "../../utilities/deleteEventById";
import { ISellerEvent } from "../../interfaces/ISellerEvent";

export interface ITicketListState {
  events?: ISellerEvent[];
  eventId?: number;
}

export function TicketListReducer(
  state: ITicketListState,
  action: ITicketListAction
) {
  const { type, payload } = action;
  switch (type) {
    case TicketListReducerActions.UPDATE_LIST:
      return {
        ...state,
        events: payload.events,
      };
    case TicketListReducerActions.DUPLICATE:
      if (payload.eventId && state.events) {
        return {
          ...state,
          events: duplicateEventById(state.events, payload.eventId),
        };
      }
      return state;

    case TicketListReducerActions.DELETE:
      if (payload.eventId && state.events) {
        return {
          ...state,
          events: deleteEventById(state.events, payload.eventId),
        };
      }
      return state;

    default:
      return state;
  }
}
