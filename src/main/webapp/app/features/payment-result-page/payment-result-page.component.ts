import {Component, OnInit} from '@angular/core';
import {IOrder} from '../../core/model/order';
import {OrderService} from '../../core/service/order.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ROUTES} from '../../shared/constants';

@Component({
    selector: 'app-payment-result-page',
    templateUrl: './payment-result-page.component.html',
    styleUrls: ['./payment-result-page.component.scss']
})
export class PaymentResultPageComponent implements OnInit {

    readonly ROUTES = ROUTES;
    orderId: string = this.route.snapshot.params.id;
    order: IOrder;

    constructor(private orderService: OrderService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.orderService.get(this.orderId).subscribe((order: IOrder) => {
            this.order = order;
        })
    }

}
