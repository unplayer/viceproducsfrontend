import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {

  id:number;
  product:Product;
  constructor(private route:ActivatedRoute, private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.product = new Product;
    this.productService.getProductById(this.id).subscribe(data => {
      this.product = data;
      swal(`Product Details ${this.product.name}`);
    })

  }

  return()
  {
    this.router.navigate(["/products"]);
  }

}
