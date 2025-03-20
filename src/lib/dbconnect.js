import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;

const options = {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
};

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    clientPromise = MongoClient.connect(uri, options);
}

export default async function dbConnect(collectionName) {
    const client = await clientPromise;
    return client.db(process.env.DB_NAME).collection(collectionName);
}

export const collectionNameObj = {
    userCollection: "users",
};
