import { Component, OnInit } from '@angular/core';
import { IProduct } from './products/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './products/products.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'product Detail';
  product: IProduct;
  errorMessage:string;
  constructor(private _route:ActivatedRoute, 
              private _router:Router,
            private _productService: ProductService) { }

ngOnInit() {
const param = this._route.snapshot.paramMap.get('id');
if (param) {
    const id = +param;
    this.getProduct(id);
}
}

getProduct(id: number) {
this._productService.getProduct(id).subscribe(
    product => this.product = product,
    error => this.errorMessage = <any>error);
}
    OnBack(): void {
      this._router.navigate(['/products']);
  }
}
