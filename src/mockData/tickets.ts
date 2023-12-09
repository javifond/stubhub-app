import { ITicket } from "../interfaces/ITicket";

export const MOCK_TICKETS: ITicket[] = [
  {
    sellerId: 83,
    eventId: 2,
    id: 1653,
    quantity: 10,
    unit_price: 497,
    status: true,
  },
  {
    sellerId: 87,
    eventId: 2,
    id: 1730,
    quantity: 7,
    unit_price: 462,
    status: true,
  },
];

export const MOCK_TICKETS_BY_SELLER: ITicket[] = [
  {
    sellerId: 1,
    eventId: 320,
    id: 1,
    quantity: 8,
    unit_price: 7,
    status: false,
  },
  {
    sellerId: 1,
    eventId: 236,
    id: 2,
    quantity: 9,
    unit_price: 229,
    status: true,
  },
];
