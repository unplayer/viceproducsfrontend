import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id:number;
  product:Product = new Product();
  constructor(private productService:ProductService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productService.getProductById(this.id).subscribe(data =>{
      this.product = data;
    },error => console.log(error));
  }

  getProductsList(){
    this.return();
    swal('Product updated',`The product ${this.product.brand} has been updated successful.`,`success`);
  }

  onSubmit(){
    this.productService.updateProduct(this.id,this.product).subscribe(dato => {
      this.getProductsList();
    },error => console.log(error));
  }

  return()
  {
    this.router.navigate(['/products']);
  }

}
