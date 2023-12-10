import { IEvent } from "./IEvent";
import { ITicket } from "./ITicket";

/**
 * Defines the interface for the seller event
 */
export interface ISellerEvent extends IEvent, Omit<ITicket, "id" | "eventId"> {}
