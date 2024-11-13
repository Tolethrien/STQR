import { MongoClient } from "mongodb";

const { MONGO_PASS } = useRuntimeConfig();
const client = new MongoClient(MONGO_PASS);

export default client;
