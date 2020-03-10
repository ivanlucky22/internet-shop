import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaymentResultPageComponent} from './payment-result-page.component';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    declarations: [PaymentResultPageComponent],
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule
    ],
    exports: [PaymentResultPageComponent]
})
export class PaymentResultPageModule {
}
