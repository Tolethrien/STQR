import client from "../createClient";
import { EventItem } from "~/types/eventSchema";

export default defineEventHandler((event) => {
  const query = getQuery<EventItem>(event);
  const db = client.db("STQR");
  db.collection<EventItem>("events").insertOne(query);
});
