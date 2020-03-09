import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductComponent} from '../product/product.component';
import {MatButtonModule, MatCardModule, MatIconModule} from '@angular/material';
import {RouterModule} from '@angular/router';


@NgModule({
    declarations: [ProductComponent],
    imports: [
        CommonModule,
        MatCardModule,
        RouterModule,
        MatIconModule,
        MatButtonModule
    ],
    exports: [
        ProductComponent
    ]
})
export class ProductModule {
}
