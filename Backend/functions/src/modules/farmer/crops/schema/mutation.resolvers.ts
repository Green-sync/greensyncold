import { CropsService } from "../CropsService"

export const CropsMutationResolver = {
    createCrop: (_:any, arg: {crop: any}) => {

        return CropsService.addCrop(arg.crop);
     },
    
}