import { cropsSchema } from "../modules";
import { weatherSchema } from "../modules/farmer/weather";

import { farmSchema } from "../modules/farmer/farm";
import {livestockSchema} from "../modules";
import  {readFileSync} from "fs";

const mainSchema = readFileSync("src/schema/main.graphql", "utf-8")
export const MainSchema= [
    mainSchema,
    cropsSchema,
    weatherSchema,
    livestockSchema,
    farmSchema
]