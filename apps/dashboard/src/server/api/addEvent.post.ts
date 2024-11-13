import client from "./createClient";
import { EventItem } from "~/types/eventSchema";

export default defineEventHandler(async () => {
  const db = client.db("STQR");
  db.collection<EventItem>("events").insertOne({
    capacity: 100,
    date: "12.12.12",
    eventName: "Some Party",
    location: "Your mama house",
    sold: 15,
  });
});
