import { db } from "../../../utils";

export class IotDeviceService {

    static async addIotDevice(iotDevice: any) {
        try {
          
            await db.collection("IotDevice").add(iotDevice)
          return {
            message: "IotDevice successfully added ready to be installed", success: true,
          };
        } catch (error) {
          return {
            message: `${error} failed to add IotDevice`, success: false,
          };
        }
      }

}