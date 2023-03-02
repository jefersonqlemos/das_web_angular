import { IProduct } from "./IProduct";

export interface ICartProduct{
    id: number;
    quantity: number;
    cartId?: number;
    productId: number;
    value: number;
    product: IProduct;
}