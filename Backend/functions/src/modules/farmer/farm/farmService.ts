import { db } from "../../../utils";

export class FarmService {

    static async addFarm(farm: any) {
        try {
          
            await db.collection("Farms").add(farm)
          return {
            message: "Farm details successfully added", success: true,
          };
        } catch (error) {
          return {
            message: `${error} failed to add farm details`, success: false,
          };
        }
      }

}