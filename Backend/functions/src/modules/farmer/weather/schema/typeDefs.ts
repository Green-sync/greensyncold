import {readFileSync} from "fs"

export const weatherSchema = readFileSync("src/modules/farmer/weather/schema/weather.graphql", "utf-8")