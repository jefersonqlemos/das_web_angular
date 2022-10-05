import { ICliente } from "./ICliente";

export interface ICarrinho {
  id: number;
  valorTotal: number;
  cliente: ICliente;
}