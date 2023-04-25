import { CropsMutationResolver} from "../modules"
import { IotDeviceMutationResolver } from "../modules/farmer/iotdevices"
export const MutationResolver = {
    ...CropsMutationResolver,
    ...IotDeviceMutationResolver
}