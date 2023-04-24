import * as functions from "firebase-functions";
import { ApolloServer} from "@apollo/server"
import express from "express"
import cors from "cors"
const greensyncApp = express()
import { expressMiddleware} from "@apollo/server/express4"
import { db } from "./utils";
import {QueryResolvers, MutationResolver} from "./resolvers"
import { MainSchema } from "./schema";
const resolvers = {
    Query: {
        ...QueryResolvers
    },
    Mutation: {
        ...MutationResolver
    }
}


interface GreenContext {
    db?: any
    token?: String
    user?: any
}

const greenApp = async () => {
    const server = new ApolloServer<GreenContext>({
        typeDefs: MainSchema,
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
