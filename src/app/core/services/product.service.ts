import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Chocolate Truffle Cake',
      price: 799,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
      description: 'Rich chocolate layered cake with premium cocoa.'
    },
    {
      id: 2,
      name: 'Red Velvet Cake',
      price: 899,
      image: 'https://images.unsplash.com/photo-1606312619344-49f6b3d4d7d5',
      description: 'Soft red velvet cake with creamy frosting.'
    },
    {
      id: 3,
      name: 'Butterscotch Delight',
      price: 749,
      image: 'https://images.unsplash.com/photo-1599785209707-28c2b8b36f1f',
      description: 'Classic butterscotch cake with caramel crunch.'
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}