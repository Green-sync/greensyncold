import {LivestockService} from "../LivestockService"
export const StockMutationResolver = {
    createStock: (_:any, arg: {stock: any}) =>{
        return LivestockService.addStock(arg.stock);
    },
}