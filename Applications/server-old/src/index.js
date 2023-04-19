import { ApolloServer } from "@apollo/server";
import cors from "cors";
import express from "express";
const typeDefs = require(".src/schema");
const resolvers = require(".src/resolvers");
const app = express();
app.use(cors());
app.use(express.json());
const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    parseOptions: {
      allowLegacySDLImplementsInterfaces: true,
    },
  });
  await server.start();
  server.applyMiddleware({ app, path: "/" });
};
startServer().then((r) => r);
export const greensync = functions.https.onRequest(app);

//highlight-end
