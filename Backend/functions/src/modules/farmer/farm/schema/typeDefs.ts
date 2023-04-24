import {readFileSync} from "fs"

export const farmSchema = readFileSync("src/modules/farmer/farm/schema/farm.graphql", "utf-8")