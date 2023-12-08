/**
 * Defines the data object received from the API,
 * from:
 *
 * https://fake-tb-api.onrender.com/events
 * or
 * https://fake-tb-api.onrender.com/events?category=categoryId
 *
 */
export interface IEvent {
  categoryId: number;
  id: number;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  thumbnailImageUrl: string;
  city: string;
  country: string;
  venueName: string;
}
