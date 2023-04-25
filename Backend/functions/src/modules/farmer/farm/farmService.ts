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

    static async getFarm(user: any) {
        try {
            const farmsArray: any = [];
            const farmData = await db.collection("Farms").get()
            // Loop through the documents in the collection and push their data into the array
            farmData.forEach((doc) => {
                farmsArray.push({ id: doc.id, ...doc.data() });
            });
            return farmsArray
        } catch (error) {
            return {
                message: `${error} failed to retrieve farm details`, success: false,
            };
        }
    }

    //   static async getFarmById(farmId: string) {
    //     try {
    //         const farmDoc = await db.collection('Farms').doc(farmId).get();
    //         // const farmData = await db.collection("Farms").where("farmId", "==", farmId).get();
    //             const farmData = farmDoc.data();
    //             return farmData  

    //     } catch (error) {
    //         throw new Error('Failed to get farm: ' + error);
    //     }
    //   }


}