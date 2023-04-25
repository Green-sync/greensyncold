import { cropsSchema } from "../modules";
import { iotdeviceSchema } from "../modules/farmer/iotdevices"
import  {readFileSync} from "fs"



const mainSchema = readFileSync("src/schema/main.graphql", "utf-8")
export const MainSchema= [
    mainSchema,
    cropsSchema,
    iotdeviceSchema
    // iotSchema
    // livestockSchema

    
]