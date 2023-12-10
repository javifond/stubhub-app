import { IEvent } from "../interfaces/IEvent";
import { ISellerEvent } from "../interfaces/ISellerEvent";

export const MOCK_EVENTS: IEvent[] = [
  {
    categoryId: 1,
    id: 320,
    title: "tempore provident quibusdam",
    description:
      "excepturi pariatur explicabo doloribus eum omnis fugit minus\nplaceat aut dolore praesentium ab debitis\nincidunt aut optio et saepe\ntempora maiores non aliquid",
    date: "2023-04-11T02:01:26.000Z",
    imageUrl: "https://via.placeholder.com/500/2c248a",
    thumbnailImageUrl: "https://via.placeholder.com/100/ded2a3",
    city: "South Kiel",
    country: "Togo",
    venueName: "Natus amet occaecati.",
  },
  {
    categoryId: 1,
    id: 236,
    title: "architecto excepturi ut ab voluptatem",
    description:
      "tempore quibusdam earum rerum sit est et consectetur\nautem id doloremque veritatis fugiat quibusdam\nesse quae natus sed illum\niure accusantium eveniet suscipit consectetur eum labore totam facere",
    date: "2023-04-14T22:01:07.000Z",
    imageUrl: "https://via.placeholder.com/500/610704",
    thumbnailImageUrl: "https://via.placeholder.com/100/8f2cc4",
    city: "New Cassandrachester",
    country: "Greece",
    venueName: "Rerum nam assumenda.",
  },
];

export const MOCK_EVENTS_BY_SELLER: ISellerEvent[] = [
  {
    categoryId: 1,
    id: 320,
    title: "tempore provident quibusdam",
    description:
      "excepturi pariatur explicabo doloribus eum omnis fugit minus\nplaceat aut dolore praesentium ab debitis\nincidunt aut optio et saepe\ntempora maiores non aliquid",
    date: "2023-04-11T02:01:26.000Z",
    imageUrl: "https://via.placeholder.com/500/2c248a",
    thumbnailImageUrl: "https://via.placeholder.com/100/ded2a3",
    city: "South Kiel",
    country: "Togo",
    venueName: "Natus amet occaecati.",
    sellerId: 1,
    quantity: 8,
    unit_price: 7,
    status: false,
  },
  {
    categoryId: 1,
    id: 236,
    title: "architecto excepturi ut ab voluptatem",
    description:
      "tempore quibusdam earum rerum sit est et consectetur\nautem id doloremque veritatis fugiat quibusdam\nesse quae natus sed illum\niure accusantium eveniet suscipit consectetur eum labore totam facere",
    date: "2023-04-14T22:01:07.000Z",
    imageUrl: "https://via.placeholder.com/500/610704",
    thumbnailImageUrl: "https://via.placeholder.com/100/8f2cc4",
    city: "New Cassandrachester",
    country: "Greece",
    venueName: "Rerum nam assumenda.",
    sellerId: 1,
    quantity: 9,
    unit_price: 229,
    status: true,
  },
];
