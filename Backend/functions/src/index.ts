import * as functions from "firebase-functions";
import { ApolloServer} from "@apollo/server"
// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
import express from "express"
import cors from "cors"
const greensyncApp = express()
import { expressMiddleware} from "@apollo/server/express4"
import { db } from "./utils";
import {QueryResolvers} from "./resolvers"
const resolvers = {
    Query: {
        ...QueryResolvers
    }
}
const typeDefs = `#graphql

type Query {
    hello: String

}
`

interface GreenContext {
    db?: any
    token?: String
    user?: any
}

const greenApp = async () => {
    const server = new ApolloServer<GreenContext>({
        typeDefs,
        resolvers,
        // @ts-ignore
        context: async ({req}: any) =>{
            console.log(req)
            return {
                db,
                user: {}
            }
        }
    })
    await server.start()
    greensyncApp.use("/", cors(), express.json(), expressMiddleware(server))
}
greenApp().then(()=>{})
export const greensync = functions.https.onRequest(greensyncApp);
