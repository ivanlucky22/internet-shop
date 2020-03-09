import {Component, Input, OnInit} from '@angular/core';
import {IconProduct} from '../../core/model/icon-product.model';
import {ROUTES} from '../../shared/constants';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
    readonly ROUTES = ROUTES;

    @Input()
    product: IconProduct;

    constructor() {
    }

    ngOnInit() {
    }

}
