import { IClienteModel } from "./ICliente";

export interface ICarrinho {
  id: number;
  valorTotal: number;
  cliente: IClienteModel;
}