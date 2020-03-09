import {Component, OnInit} from '@angular/core';
import {IconProduct} from '../../core/model/icon-product.model';

@Component({
    selector: 'app-product-list-page',
    templateUrl: './product-list-page.component.html',
    styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit {

    productsList: IconProduct[];

    constructor() {
    }

    ngOnInit() {
        this.productsList = [
            {name: 'Icon that represents home page', key: 'home', price: 123.99},
            {name: 'Icon that represents motorcycle', key: 'motorcycle', price: 523.99},
            {name: 'Icon that represents a clock', key: 'alarm', price: 823.99},
            {name: 'Icon that represents a clip', key: 'attachment', price: 293.99},
            {name: 'Icon that represents a microphone', key: 'mic', price: 723.99},
        ]
    }

}
