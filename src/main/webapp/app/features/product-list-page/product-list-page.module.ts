import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListPageComponent} from './product-list-page.component';
import {ProductModule} from '../product/product.module';
import {MatGridListModule, MatPaginatorModule} from '@angular/material';

@NgModule({
    declarations: [ProductListPageComponent],
    imports: [
        CommonModule,
        ProductModule,
        MatPaginatorModule,
        MatGridListModule
    ],
    exports: [ProductListPageComponent]
})
export class ProductListPageModule {
}
