import { ICliente } from "./ICliente";
import { IProductModel } from "./IProduct";

export interface IPedido {
    id: number;
    valorTotal: number;
    cliente: ICliente;
    produtos: IProductModel[]; 
}