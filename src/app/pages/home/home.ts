import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/models/product.model';
import { ProductCardComponent } from '../../shared/components/product-card/product-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductCardComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  featuredProducts: Product[] = [];

  constructor(private productService: ProductService) {
    const allProducts = this.productService.getProducts();

    // Select products with tags (Bestseller / Seasonal etc)
    this.featuredProducts = allProducts
      .filter(p => p.tags && p.tags.length > 0)
      .slice(0, 4);
  }
}