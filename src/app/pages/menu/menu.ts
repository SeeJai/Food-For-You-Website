import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/models/product.model';
import { Category } from '../../core/models/category.model';
import { ProductCardComponent } from '../../shared/components/product-card/product-card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, FormsModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {

  categories: Category[] = [];
  allProducts: Product[] =[];
  products: Product[] = [];

  selectedCategoryId: number | null = null;
  searchTerm: string = '';
  sortOption: string = '';

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
    this.allProducts = this.productService.getProducts();
    this.products = [...this.allProducts];
  }

  get selectedCategory(): Category | undefined {
    if (this.selectedCategoryId === null) return undefined;
    return this.categories.find(
      (c) => c.id === this.selectedCategoryId
    );
  }

  filterByCategory(categoryId: number | null) {
    this.selectedCategoryId = categoryId;
    this.applyFilters();
  }

    applyFilters() {
      let filtered = [...this.allProducts];

      if (this.selectedCategoryId !== null) {
        filtered = filtered.filter(
          (p) => p.categoryId === this.selectedCategoryId);
      }

      if (this.searchTerm.trim()){
        filtered = filtered.filter((p) =>
          p.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      }
      
      switch (this.sortOption) {
        case 'priceLow':
          filtered.sort((a,b) => a.price - b.price);
          break;
        case 'priceHigh':
          filtered.sort((a,b) => b.price - a.price);
          break;
        case 'name':
          filtered.sort((a,b) => a.name.localeCompare(b.name));
          break;
      }

    this.products = filtered;
  }
}