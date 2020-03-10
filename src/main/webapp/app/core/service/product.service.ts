import {Injectable} from '@angular/core';
import {IconProduct} from '../model/icon-product.model';
import {Observable} from 'rxjs';
import {HttpParamsPair} from './util/http-params-pair';
import {RequestService} from './request.service';
import {HttpResponse} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    readonly PRODUCTS_API_URL = 'products';

    constructor(private requestService: RequestService<IconProduct>) {
    }

    query(req?: HttpParamsPair[]): Observable<HttpResponse<IconProduct[]>> {
        return this.requestService.query(this.PRODUCTS_API_URL, req);
    }
}
