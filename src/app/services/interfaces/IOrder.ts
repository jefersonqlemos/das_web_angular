import { IClient } from "./IClient";

export interface IOrder {
    id: number;
    totalValue: number,
    clientId: number,
    clients?: IClient
}