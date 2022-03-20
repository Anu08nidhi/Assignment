import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAdminComponent } from './product-admin/product-admin.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {path:"product-details" , component: ProductDetailsComponent},
  {path:"product-admin" , component: ProductAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
