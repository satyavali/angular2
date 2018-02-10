import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from '../product-detail.component';
import { ConvertToSpacesPipes } from '../shared/covert-to-spaces.pipes';


import { RouterModule } from '@angular/router';
import { ProductGaurdService } from './product-gaurd.service';
import { ProductService } from './products.service';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', 
      canActivate: [ProductGaurdService], 
      component: ProductDetailComponent},
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipes,
  ],
  providers: [
    ProductService,
    ProductGaurdService]
})
export class ProductModule { }
