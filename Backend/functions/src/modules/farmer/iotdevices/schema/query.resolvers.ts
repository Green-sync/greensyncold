import { IotDeviceService } from "../IotDeviceService"

export const IotDeviceQueryResolver = {
    getAllIoTDevice: (_:unknown, __:unknown, context: {user:any, db: any}) => { 
      return IotDeviceService.getAllIoTDevices(context.user)
    },
    getIoTDevice: (_:unknown, __:unknown, context: {user:any, db: any}) =>{
        return IotDeviceService.getIoTDevice(context.user)
    }

}