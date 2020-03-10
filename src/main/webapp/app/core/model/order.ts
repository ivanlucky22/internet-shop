import {IconProduct} from './icon-product.model';

export interface IOrder {
    id: string;
    product: IconProduct;
    amount: number;
}

export class Order {
    constructor(public product: IconProduct, public amount: number) {
        this.product = product || null;
        this.amount = amount || null;
    }
}
