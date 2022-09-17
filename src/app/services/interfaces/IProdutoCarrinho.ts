import { IProductModel } from "./IProduct";

export interface IProdutoCarrinho{
    quantidade: number;
    carrinhoId: number;
    produtoId: number;
    produto: IProductModel;
}