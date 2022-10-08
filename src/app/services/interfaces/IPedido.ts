import { IClienteModel } from "./ICliente";
import { IProdutoPedido } from "./IProdutoPedido";

export interface IPedido {
    id: number;
    valorTotal: number;
    cliente: IClienteModel;
    produtos: IProdutoPedido[]; 
}