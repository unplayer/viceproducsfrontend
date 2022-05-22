import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsProductComponent } from './details-product/details-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { SaveProductComponent } from './save-product/save-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path: 'products',component:ListProductsComponent},
  {path: '',redirectTo:'products',pathMatch:'full'},
  {path: 'addproduct',component:SaveProductComponent},
  {path: 'updateproduct/:id',component:UpdateProductComponent},
  {path: 'detailsproduct/:id',component:DetailsProductComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
