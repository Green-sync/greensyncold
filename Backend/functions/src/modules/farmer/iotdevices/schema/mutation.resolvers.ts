import { IotDeviceService } from "../IotDeviceService"

export const IotDeviceMutationResolver = {
    createIotDevice: (_:any, arg: {iotdevice: any}) => {

        return IotDeviceService.addIotDevice(arg.iotdevice);
     },
    
}