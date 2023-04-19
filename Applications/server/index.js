const typeDefs = require("./src/schema");
const resolvers = require("./src/resolvers");
const functions = require("firebase-functions");

const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const cors = require("cors");
const express = require("express");

const app = express();

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();
  app.use("/", cors(), express.json(), expressMiddleware(server));
};

startServer().then(() => {
  exports.greensync = functions.https.onRequest(app);
});
