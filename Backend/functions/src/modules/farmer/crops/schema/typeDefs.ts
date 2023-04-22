import {readFileSync} from "fs"

export const cropsSchema = readFileSync("src/modules/farmrer/crops/schema/crops.graphql", "utf-8")
