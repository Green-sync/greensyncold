import { db } from "../../../utils";

export class CropsService {
  static async addCrop(crop: any) {
        try {
          
          await db.collection("Crops").add(crop)
          return {
            message: "Crop details successfully added", success: true,
          };
        } catch (error) {
          return {
            message: `${error} failed to add crop details`, success: false,
          };
        }
      }

}