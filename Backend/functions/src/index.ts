import * as functions from "firebase-functions";
import { ApolloServer} from "@apollo/server"
// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
import express from "express"
import cors from "cors"
const greensyncApp = express()
import { expressMiddleware} from "@apollo/server/express4"
const resolvers = {
    Query: {
        hello: ()=> "Hello World"
    }
}
const typeDefs = `#graphql
type Query {
    hello: String
}
`

const greenApp = async () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    })
    await server.start()
    greensyncApp.use("/", cors(), express.json(), expressMiddleware(server))
}
greenApp().then(()=>{})
export const greensync = functions.https.onRequest(greensyncApp);
