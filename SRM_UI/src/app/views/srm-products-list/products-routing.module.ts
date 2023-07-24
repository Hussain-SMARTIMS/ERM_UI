import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';
import { SrmProductsListComponent } from './srm-products-list.component';

const routes: Routes = [
  {
    path: '',
    component: SrmProductsListComponent,
    data: {
      title: `Products`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
