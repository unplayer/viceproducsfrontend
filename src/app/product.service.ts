import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL = "http://localhost:8080/api/v1/products";
  
  
  constructor(private httpClient : HttpClient) { }

  getListProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}`);
  } 

  getProductById(id:Number):Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseURL}/${id}`);
  } 

  saveProduct(product:Product):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,product);
  } 
  

  updateProduct(id:number,product:Product):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,product);
  } 
  
  deleteProduct(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  } 

}
