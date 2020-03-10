import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListPageComponent} from './features/product-list-page/product-list-page.component';
import {ProductListPageModule} from './features/product-list-page/product-list-page.module';
import {PaymentPageModule} from './features/payment-page/payment-page.module';
import {PaymentPageComponent} from './features/payment-page/payment-page.component';
import {ROUTES} from './shared/constants';
import {PaymentResultPageComponent} from './features/payment-result-page/payment-result-page.component';
import {PaymentResultPageModule} from './features/payment-result-page/payment-result-page.module';


const routes: Routes = [ // as lazy loading of modules could be used
    {
        path: '',
        component: ProductListPageComponent
    },
    {
        path: ROUTES.PAYMENT+'/:id',
        component: PaymentPageComponent
    },
    {
        path: ROUTES.PAYMENT_RESULT+'/:id',
        component: PaymentResultPageComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes,
            {enableTracing: false}),
        ProductListPageModule,
        PaymentPageModule,
        PaymentResultPageModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
