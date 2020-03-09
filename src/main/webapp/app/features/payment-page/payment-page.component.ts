import {Component, OnInit} from '@angular/core';
import {ROUTES} from '../../shared/constants';

@Component({
    selector: 'app-payment-page',
    templateUrl: './payment-page.component.html',
    styleUrls: ['./payment-page.component.scss']
})
export class PaymentPageComponent implements OnInit {

    readonly ROUTES = ROUTES;



    constructor() {
    }

    ngOnInit() {
    }

}
