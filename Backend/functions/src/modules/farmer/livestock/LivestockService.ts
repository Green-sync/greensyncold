import { db } from "../../../utils";

export class LivestockService {
    static async addStock(stock: any) {
        try {          
          await db.collection("Stock").add(stock)
          return {
            message: "Livestock details successfully added", success: true,
          };
        } catch (error) {
          return {
            message: `${error} failed to add Livestock details`, success: false,
          };
        }
      }

}