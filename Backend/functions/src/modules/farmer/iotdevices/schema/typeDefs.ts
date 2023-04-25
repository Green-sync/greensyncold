import {readFileSync} from "fs"

export const iotdeviceSchema = readFileSync("src/modules/farmer/iotdevices/schema/iotdevice.graphql", "utf-8")
