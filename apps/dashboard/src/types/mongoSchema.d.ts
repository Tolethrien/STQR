import type { ObjectId } from "mongodb";

export type DBResponce<T> = {
  [K in keyof T]: string;
};
export interface EventItem {
  eventName: string;
  date: Date;
  city: string;
  street: string;
  location: string;
  sold: number;
  capacity: number;
  id: string;
}
