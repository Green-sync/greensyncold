
import { CropsMutationResolver, StockMutationResolver } from "../modules"
import { FarmMutationResolver } from "../modules/farmer/farm"
import { WeatherMutationResolver } from "../modules/farmer/weather"
export const MutationResolver = {
    ...CropsMutationResolver,
    ...StockMutationResolver,
    ...FarmMutationResolver,
    ...WeatherMutationResolver
}

