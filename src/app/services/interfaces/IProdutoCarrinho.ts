import { IProductModel } from "./IProduct";

export interface IProdutoCarrinho{
    id: number;
    quantidade: number;
    carrinhoId: number;
    produto: IProductModel;
}