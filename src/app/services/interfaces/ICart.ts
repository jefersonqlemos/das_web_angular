import { IClient } from "./IClient";

export interface ICart {
    id: number,
    totalValue: number,
    clienteId: number,
    clients?: IClient
}