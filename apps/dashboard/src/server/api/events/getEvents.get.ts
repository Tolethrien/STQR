import client from "../createClient";

export default defineEventHandler(async () => {
  const db = client.db("STQR");
  const collecion = db.collection("events");
  const data = collecion.find().toArray();
  return data;
});
