import type { ObjectId } from "mongodb";

export interface EventItem {
  eventName: string;
  date: Date;
  location: string;
  sold: number;
  capacity: number;
  id: string;
}
export type StringifyEventItem = {
  [K in keyof EventItem]: string;
};
