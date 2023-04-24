import { CropsMutationResolver} from "../modules"
import { StockMutationResolver } from "../modules"
import { FarmMutationResolver } from "../modules/farmer/farm"
export const MutationResolver = {
    ...CropsMutationResolver,
    ...StockMutationResolver,
    ...FarmMutationResolver
}


