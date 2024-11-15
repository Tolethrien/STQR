import { EventItem } from "~/types/mongoSchema";
import client from "../createClient";

export default defineEventHandler(async () => {
  const db = client.db("STQR");
  const collecion = db.collection<EventItem>("events");
  const data = await collecion.find().toArray();
  return data;
});
