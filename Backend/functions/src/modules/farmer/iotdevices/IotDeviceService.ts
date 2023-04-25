import { db } from "../../../utils";




export class IotDeviceService {
  //  Alldevices = []
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

      static async getIoTDevice(deviceId: any) {
        try {
          const deviceData = await db.collection("IotDevice").doc(deviceId).get()
          console.log(deviceData)
          return deviceData
        } catch (error) {
          return {
            message: `IoT device with deviceId ${deviceId} not found`,
        }     
        }
      }
      
      static async getAllIoTDevices(user: any) {
        try {
          const IotDeviceArray: any = [];
          const IotD = await db.collection("IotDevice").get()
          // Loop through the documents in the IotDevice collection and push their data into the IotDeviceArray
          IotD.forEach((doc) => {
            IotDeviceArray.push({ id: doc.id, ...doc.data() });
          });
          return IotDeviceArray
      } catch (error) {
          return {
              message: `${error} failed to retrieve Iotdevices`, success: false,
          };
      }
    }

}

// getIoTDevice: async (_, { deviceId }, { dataSources }) => {
//   const deviceData = await dataSources.iotAPI.getDeviceData(deviceId);
//   return deviceData;
// },