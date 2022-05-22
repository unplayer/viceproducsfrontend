import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { HttpClientModule } from '@angular/common/http';
import { SaveProductComponent } from './save-product/save-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DetailsProductComponent } from './details-product/details-product.component'

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    SaveProductComponent,
    UpdateProductComponent,
    DetailsProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
