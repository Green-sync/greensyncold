import { cropsSchema } from "../modules";
import { weatherSchema } from "../modules/farmer/weather";
import  {readFileSync} from "fs"


const mainSchema = readFileSync("src/schema/main.graphql", "utf-8")
export const MainSchema= [
    mainSchema,
    cropsSchema,
    weatherSchema
    // iotSchema
    // livestockSchema

    
]