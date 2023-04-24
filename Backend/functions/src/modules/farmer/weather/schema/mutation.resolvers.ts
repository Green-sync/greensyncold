import { WeatherService } from "../WeatherService"

export const WeatherMutationResolver = {
    createWeatherData: (_:any, arg: {weather: any}) => {

        return WeatherService.addWeather(arg.weather);
     },
    
}