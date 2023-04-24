import {readFileSync} from "fs"
export const livestockSchema = readFileSync("src/modules/farmer/livestock/schema/livestock.graphql", "utf-8")