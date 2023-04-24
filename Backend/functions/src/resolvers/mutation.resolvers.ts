import { CropsMutationResolver} from "../modules"
import { FarmMutationResolver } from "../modules/farmer/farm"

export const MutationResolver = {
    ...CropsMutationResolver,
    ...FarmMutationResolver
}

