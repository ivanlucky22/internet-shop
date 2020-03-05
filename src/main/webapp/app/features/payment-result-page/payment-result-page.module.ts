import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaymentResultPageComponent} from './payment-result-page.component';
import {RouterModule} from '@angular/router';


@NgModule({
    declarations: [PaymentResultPageComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [PaymentResultPageComponent]
})
export class PaymentResultPageModule {
}
