import { FarmService } from "../farmService"

export const FarmMutationResolver = {
    createFarm: (_:any, arg: {farm: any}) => {

        return FarmService.addFarm(arg.farm);
     },
    
}