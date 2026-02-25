import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private categories: Category[] = [
    { id: 1, name: 'Bread', description: 'Fresh baked breads & rolls' },
    { id: 2, name: 'Seasonal Fruit Cakes', description: 'Fresh fruit seasonal specials' },
    { id: 3, name: 'Cakes', description: 'Classic celebration cakes' },
    { id: 4, name: 'Healthy / Diet Options', description: 'Sugar free & nutritious treats' }
  ];

  private products: Product[] = [

    // Bread
    { id: 1, name: 'Garlic Bread', price: 150, image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec', description: 'Fresh garlic butter bread', categoryId: 1 },
    { id: 2, name: 'Cinnamon Roll', price: 120, image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e', description: 'Soft cinnamon roll', categoryId: 1 },

    // Seasonal
    { id: 3, name: 'Pineapple Cake', price: 750, image: 'https://images.unsplash.com/photo-1599785209707-28c2b8b36f1f', description: 'Fresh pineapple seasonal cake', categoryId: 2 },
    { id: 4, name: 'Mango Cake', price: 800, image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729', description: 'Seasonal mango special', categoryId: 2 },

    // Cakes
    { id: 5, name: 'Black Forest', price: 850, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587', description: 'Classic black forest cake', categoryId: 3 },
    { id: 6, name: 'Red Velvet', price: 900, image: 'https://images.unsplash.com/photo-1606312619344-49f6b3d4d7d5', description: 'Rich red velvet cake', categoryId: 3 },

    // Healthy
    { id: 7, name: 'Sugar Free Cake', price: 950, image: 'https://images.unsplash.com/photo-1559622214-f8a9850965bb', description: 'Healthy sugar free cake', categoryId: 4 },
    { id: 8, name: 'Ragi Cookies', price: 300, image: 'https://images.unsplash.com/photo-1589987607627-7a9dbf57a5aa', description: 'Healthy ragi cookies', categoryId: 4 }

  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}