import { CropsMutationResolver} from "../modules"
import { WeatherMutationResolver } from "../modules/farmer/weather"
export const MutationResolver = {
    ...CropsMutationResolver,
    ...WeatherMutationResolver
}