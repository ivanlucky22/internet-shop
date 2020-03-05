import {Component, OnInit} from '@angular/core';
import {ROUTES} from '../../shared/constants';

@Component({
    selector: 'app-product-list-page',
    templateUrl: './product-list-page.component.html',
    styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit {

    ROUTES = ROUTES;

    constructor() {
    }

    ngOnInit() {
    }

}
