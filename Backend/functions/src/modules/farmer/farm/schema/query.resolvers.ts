import { FarmService } from "../farmService";

export const FarmQueryResolver = {
    getFarm: (_:unknown, __:unknown, context: {user:any, db: any}) => { 
      //context? {message:`Welcome to the crops world ${context}`}: {message:'Unauthorized'};
      return FarmService.getFarm(context.user)
    },
    // getFarmById: (_parent: unknown, args: { farmId: string }) => {
    //     return FarmService.getFarmById(args.farmId);
    //   },
   
}