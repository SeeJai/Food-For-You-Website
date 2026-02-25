import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/models/product.model';
import { Category } from '../../core/models/category.model';
import { ProductCardComponent } from '../../shared/components/product-card/product-card';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {

  categories: Category[] = [];
  products: Product[] = [];
  selectedCategoryId: number | null = null;

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
    this.products = this.productService.getProducts();
  }

  get selectedCategory(): Category | undefined {
    if (this.selectedCategoryId === null) return undefined;
    return this.categories.find(
      (c) => c.id === this.selectedCategoryId
    );
  }

  filterByCategory(categoryId: number | null) {
    this.selectedCategoryId = categoryId;

    if (categoryId === null) {
      this.products = this.productService.getProducts();
    } else {
      this.products = this.productService.getProductsByCategory(categoryId);
    }
  }
}