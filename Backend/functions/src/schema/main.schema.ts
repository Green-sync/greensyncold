import { cropsSchema } from "../modules";
import { farmSchema } from "../modules/farmer/farm";
import  {readFileSync} from "fs"


const mainSchema = readFileSync("src/schema/main.graphql", "utf-8")
export const MainSchema= [
    mainSchema,
    cropsSchema,
    farmSchema,
    // iotSchema
    // livestockSchema

    
]