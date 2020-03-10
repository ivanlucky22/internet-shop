import {Component, Input, OnInit} from '@angular/core';
import {IconProduct} from '../../core/model/icon-product.model';
import {ROUTES} from '../../shared/constants';
import {OrderService} from '../../core/service/order.service';
import {Router} from '@angular/router';
import {IOrder} from '../../core/model/order';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    @Input()
    product: IconProduct;

    constructor(private orderService: OrderService,
                private router: Router) {
    }

    ngOnInit() {
    }

    onBuyClicked() {
        this.orderService.createOrder(this.product, 1).subscribe((order: IOrder) =>
            this.router.navigate([ROUTES.PAYMENT+'/'+order.id])
        );
    }
}
