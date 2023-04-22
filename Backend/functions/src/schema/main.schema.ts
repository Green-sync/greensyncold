import { cropsSchema } from "../modules";
import  {readFileSync} from "fs"


const mainSchema = readFileSync("src/schema/main.graphql", "utf-8")
export const MainSchema= [
    mainSchema,
    cropsSchema
    // iotSchema
    // livestockSchema

    
]