import { MongoClient, ServerApiVersion } from "mongodb";

export default defineEventHandler(async () => {
  const { MONGO_PASS } = useRuntimeConfig();
  const client = new MongoClient(MONGO_PASS, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  await client.connect();
  const db = client.db("STQR");

  const collections = await db.listCollections().toArray();
  client.close();
  return collections;
});
