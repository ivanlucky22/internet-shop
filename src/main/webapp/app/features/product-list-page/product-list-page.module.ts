import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListPageComponent} from './product-list-page.component';
import {RouterModule} from '@angular/router';


@NgModule({
    declarations: [ProductListPageComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [ProductListPageComponent]
})
export class ProductListPageModule {
}
