import { CommonModule } from '@angular/common';
import { Component, Input,Output,EventEmitter} from '@angular/core';
import { Product } from '../../../interface/product';
import { FormsModule } from '@angular/forms';
import { ProductserviceService } from '../../service/productservice.service';
@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  text: string = "quân"
  @Input() product!: Product;
  @Output() clicked : EventEmitter<string> = new EventEmitter<string>()
  @Output() onadd = new EventEmitter<Product>
  clickme(){
    this.text = "hello Nguyễn Danh Quân"
    this.clicked.emit(this.text)
  }
  constructor(private productservice : ProductserviceService){}
  productnew: Product={
    name: '',
    price: 0,
    desscription: '',
    image: ''

  }

  Onsubmit(){
    this.productservice.onAdd(this.productnew).subscribe(()=> console.log('Add product succsesfully')
    )
  }
}
