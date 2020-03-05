import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListPageComponent} from './features/product-list-page/product-list-page.component';
import {ProductListPageModule} from './features/product-list-page/product-list-page.module';
import {PaymentPageModule} from './features/payment-page/payment-page.module';
import {PaymentPageComponent} from './features/payment-page/payment-page.component';
import {ROUTES} from './shared/constants';


const routes: Routes = [
    {
        path: '',
        component: ProductListPageComponent
    },
    {
        path: ROUTES.PAYMENT,
        component: PaymentPageComponent,
        children: [
            {
                path: ROUTES.PAYMENT_RESULT,
                loadChildren: () => import('./features/payment-result-page/payment-result-page.module').then(m => m.PaymentResultPageModule)
            }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes,
            { enableTracing: true }),
        ProductListPageModule,
        PaymentPageModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
