import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products:Product[];
  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(){
    this.productService.getListProducts().subscribe(data =>{
        this.products = data;
    })
  }

  updateProduct(id:number)
  {
    this.router.navigate(['updateproduct',id]);
  } 

  deleteProduct(id:number){
    swal({
      title: 'Are you sure?',
      text: "This product will be deleted.",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.productService.deleteProduct(id).subscribe(data => {
          console.log(data);
          this.getProducts();
          swal(
            'Product deleted',
            'The product has been deleted successfully',
            'success'
          )
        })
      }
    })
  }

  productDetails(id:number)
  {
    this.router.navigate(['detailsproduct',id]);
  }

}
