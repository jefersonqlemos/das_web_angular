import { IProduct } from "./IProduct";

export interface IProdutoPedido{
    id: number;
    quantidade: number;
    produto: IProduct;
}