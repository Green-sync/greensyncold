import {readFileSync} from "fs"

export const cropsSchema = readFileSync("src/modules/farmer/crops/schema/crops.graphql", "utf-8")
