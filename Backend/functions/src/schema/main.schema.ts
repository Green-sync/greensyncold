import { cropsSchema } from "../modules";
import {livestockSchema} from "../modules";
import  {readFileSync} from "fs";

const mainSchema = readFileSync("src/schema/main.graphql", "utf-8")
export const MainSchema= [
    mainSchema,
    cropsSchema,
    livestockSchema
    // iotSchema
   

    
]