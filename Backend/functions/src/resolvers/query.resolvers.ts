import { CropsQueryResolver } from "../modules";
import { FarmQueryResolver } from "../modules/farmer/farm";
import { WeatherQueryResolver } from "../modules/farmer/weather";


export const QueryResolvers = {
    ...CropsQueryResolver,
    ...WeatherQueryResolver,
    ...FarmQueryResolver
}