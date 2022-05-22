import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-save-product',
  templateUrl: './save-product.component.html',
  styleUrls: ['./save-product.component.css']
})
export class SaveProductComponent implements OnInit {

  product : Product = new Product();

  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
  }

  saveProduct()
  {
    this.productService.saveProduct(this.product).subscribe(data => {
      console.log(data);
      this.redirectProductList();
    },error=> console.log(error));
  }

  redirectProductList()
  {
    this.router.navigate(['/products']);
  }

  onSubmit(): void
  {
    this.saveProduct();
  }
}
