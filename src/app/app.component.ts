import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from '../interface/product';

import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './component/product-item/product-item.component';
import { ProductserviceService } from './service/productservice.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ProductItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  itemproduct!: Product
  title = 'WD18330';
  isactive: boolean = false;
  product!: Product[]

constructor(private productinject: ProductserviceService){
  this.productinject.getAll().subscribe(products => this.product = products)

}
removeitem(id: number){
  const confirm = window.confirm('Bạn chắc chưa?')
  if(confirm){
    this.product = this.product.filter(item => item.id !== id)
  }
}
showinfor(product: Product){
  this.itemproduct = product

}
clickOutput(event: string){
  this.title = event

}
handleAdd(product: Product){
  // this.product.push(product)
  this.productinject.onAdd(product)
}


  // showinfor(){
  //   return this.product.name
  // }
  // change(){
  //   this.product.name = "iphone new"
  // }
  // changeprice(event : any){
  //     this.product.price = event.target.value
  // }
}
