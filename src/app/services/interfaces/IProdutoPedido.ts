import { IProductModel } from "./IProduct";

export interface IProdutoPedido{
    id: number;
    quantidade: number;
    produto: IProductModel;
}