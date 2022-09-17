import { IProductModel } from "./IProduct";
import { ICliente } from "./ICliente";

export interface ICarrinho {
  id: number;
  valorTotal: number;
  clienteId: number;
  cliente: ICliente;
  produtos: IProductModel;
}