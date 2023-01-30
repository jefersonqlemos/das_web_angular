import { IClient } from "./IClient";

export interface ICart {
    id: number,
    totalValue: number,
    clientId: number,
    clients?: IClient
}