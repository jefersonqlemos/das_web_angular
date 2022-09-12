import { IProductModel } from "./IProduct";

export interface IProdutoPedido extends IProductModel{
    quantidade: number;
    valor: number;
}