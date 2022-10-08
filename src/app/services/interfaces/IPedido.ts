import { ICliente } from "./ICliente";
import { IProdutoPedido } from "./IProdutoPedido";

export interface IPedido {
    id: number;
    valorTotal: number;
    cliente: ICliente;
    produtos: IProdutoPedido[]; 
}