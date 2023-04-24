
import functions from "firebase-functions";
import { typeDefs, resolvers} from "./src"
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import express from "express";

const app = express();

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();
  app.use("/", cors(), express.json(), expressMiddleware(server));
};
startServer().then(() => {});
exports.greensync = functions.https.onRequest(app);
