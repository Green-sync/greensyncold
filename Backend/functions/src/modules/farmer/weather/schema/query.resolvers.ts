/*export const WeatherQueryResolver = {
    getWeatherData: () => { 
        return {WeatherData: "", success:true}
    },

    import { IotDeviceService } from "../IotDeviceService"

export const IotDeviceQueryResolver = {
    getAllIoTDevice: (_:unknown, __:unknown, context: {user:any, db: any}) => { 
      return IotDeviceService.getAllIoTDevices(context.user)
    }
}*/

import { WeatherService } from "../WeatherService"

export const WeatherQueryResolver = {
    getAllWeathersData: (_:unknown, __:unknown, context: {user:any, db: any}) => { 
        return WeatherService.getAllWeathersData(context.user)
    }
}

