import {Component, Input, OnInit} from '@angular/core';
import {ROUTES} from '../../shared/constants';
import {IconProduct} from '../../core/model/icon-product.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDatepicker} from '@angular/material/datepicker';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderService} from '../../core/service/order.service';
import {IOrder} from '../../core/model/order';
import * as moment from 'moment';
import {Moment} from 'moment';

export const MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'LL',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};

@Component({
    selector: 'app-payment-page',
    templateUrl: './payment-page.component.html',
    styleUrls: ['./payment-page.component.scss']
})
export class PaymentPageComponent implements OnInit {

    readonly EXPIRATION_DATE_CTRL_NAME = 'expirationDate';
    orderId: string = this.route.snapshot.params.id;

    @Input()
    product: IconProduct;

    form: FormGroup;
    order: IOrder;


    noPastDateFilter = (chosenDate: Moment): boolean => {
        const now = moment();
        return now.year() <= chosenDate.year() && now.month() <= chosenDate.month();
    };

    constructor(private formBuilder: FormBuilder,
                private orderService: OrderService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            creditCard: ['', Validators.required],
            expirationDate: [moment(), Validators.required],
            cvc: ['', Validators.required]
        });
        this.orderService.get(this.orderId).subscribe((order: IOrder) => {
            this.order = order;
        })
    }

    chosenYearHandler(normalizedYear: Moment) {
        const ctrlValue = this.expirationDateControl.value;
        ctrlValue.year(normalizedYear.year());
        this.expirationDateControl.setValue(ctrlValue);
    }

    chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
        const ctrlValue = this.expirationDateControl.value;
        ctrlValue.month(normalizedMonth.month());
        this.expirationDateControl.setValue(ctrlValue);
        datepicker.close();
    }

    get expirationDateControl(): FormControl {
        return this.form.get(this.EXPIRATION_DATE_CTRL_NAME) as FormControl;
    }

    onPayCLicked() {
        // an update request could be sent BUT simplified for timing issues
        this.router.navigate([ROUTES.PAYMENT_RESULT + '/' + this.order.id])
    }
}
