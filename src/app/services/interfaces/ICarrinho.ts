import { IProductModel } from "./IProduct";
import { ICliente } from "./ICliente";

export interface ICarrinho {
  id: number;
  valorTotal: number;
  cliente: ICliente;
  produtos: IProductModel;
}