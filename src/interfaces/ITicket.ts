/**
 * Defines the data object received from the API,
 * from:
 *
 * https://fake-tb-api.onrender.com/tickets
 * or
 * https://fake-tb-api.onrender.com/tickets?eventId=2&status=true
 *
 */
export interface ITicket {
  sellerId: number;
  eventId: number;
  id: number;
  quantity: number;
  unit_price: number;
  status: boolean;
}
