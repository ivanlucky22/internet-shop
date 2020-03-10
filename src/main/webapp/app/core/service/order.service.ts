import {Injectable} from '@angular/core';
import {IconProduct} from '../model/icon-product.model';
import {IOrder, Order} from '../model/order';
import {Observable} from 'rxjs';
import {RequestService} from './request.service';
import {HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    readonly ORDERS_API_URL = 'orders';

    constructor(private requestService: RequestService<IOrder>) {
    }

    createOrder(product: IconProduct, amount: number): Observable<IOrder> {
        let order = new Order(product, amount);
        return this.requestService.post(this.ORDERS_API_URL, order)
            .pipe(map((res: HttpResponse<IOrder>) => res.body));
    }

    get(orderId: string): Observable<IOrder> {
        return this.requestService.get(`${this.ORDERS_API_URL}/${orderId}`)
            .pipe(map((res: HttpResponse<IOrder>) => res.body));
    }
}
