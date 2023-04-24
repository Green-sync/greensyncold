import { CropsMutationResolver} from "../modules"
import { StockMutationResolver } from "../modules"
export const MutationResolver = {
    ...CropsMutationResolver,
    ...StockMutationResolver
}
