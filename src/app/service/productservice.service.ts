import { Injectable } from '@angular/core';
import { Product } from '../../interface/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  products!: Product[]
  //   {
  //     id: 1,
  //     name: "iphone",
  //     price: 1000,
  //     desscription: "Chất lượng",
  //     image : 'https://static0.pocketlintimages.com/wordpress/wp-content/uploads/2023/09/apple-iphone-15-pro-square-tag.jpg'

  //   },
  //   {
  //     id: 2,
  //     name: "iphone2",
  //     price: 1000,
  //     desscription: "Chất lượng",
  //     image : 'https://static0.pocketlintimages.com/wordpress/wp-content/uploads/2023/09/apple-iphone-15-pro-square-tag.jpg'

  //   },
  //   {
  //     id: 3,
  //     name: "iphone3",
  //     price: 1000,
  //     desscription: "Chất lượng",
  //     image : 'https://static0.pocketlintimages.com/wordpress/wp-content/uploads/2023/09/apple-iphone-15-pro-square-tag.jpg'

  //   },
  //   {
  //     id: 4,
  //     name: "iphone4",
  //     price: 1000,
  //     desscription: "Chất lượng",
  //     image : 'https://static0.pocketlintimages.com/wordpress/wp-content/uploads/2023/09/apple-iphone-15-pro-square-tag.jpg'

  //   },
  // ];
  constructor(private http: HttpClient) { }
  getAll(): Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:3000/product")
  }
  onAdd(product : Product): Observable<Product>{
    return this.http.post<Product>("http://localhost:3000/product",product)
  }
}
