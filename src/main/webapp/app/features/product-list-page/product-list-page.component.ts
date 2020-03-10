import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {IconProduct} from '../../core/model/icon-product.model';
import {ProductService} from '../../core/service/product.service';
import {HttpParamsPair} from '../../core/service/util/http-params-pair';
import {HttpResponse} from '@angular/common/http';
import {MatPaginator} from '@angular/material/paginator';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-product-list-page',
    templateUrl: './product-list-page.component.html',
    styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit, AfterViewInit {

    productsList: IconProduct[];

    @ViewChild(MatPaginator, {static: false})
    paginator: MatPaginator;

    constructor(private productService: ProductService) {
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        this.requestProducts();
    }

    onPageChanged() {
        this.requestProducts();
    }

    private requestProducts() {
        const pathRequest: HttpParamsPair[] = [];
        if (this.paginator) {
            pathRequest.push(new HttpParamsPair('page', this.paginator.pageIndex || 0));
            pathRequest.push(new HttpParamsPair('size', this.paginator.pageSize || 5));
        }
        this.productService.query(pathRequest).pipe(
            map((value: HttpResponse<IconProduct[]>) => {
                console.log('value', value);
                if (this.paginator) {
                    this.paginator.length = Number(value.headers.get('X-Total-Count')) || 0;
                }
                return value.body;
            })).subscribe((products: IconProduct[]) => {
            this.productsList = products;
        })
    }
}
