import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaymentPageComponent} from './payment-page.component';
import {RouterModule} from '@angular/router';


@NgModule({
    declarations: [PaymentPageComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [PaymentPageComponent]
})
export class PaymentPageModule {
}
