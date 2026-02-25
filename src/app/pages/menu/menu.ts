import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../shared/components/product-card/product-card';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/models/product.model';
@Component({
  selector: 'app-menu',
  imports: [CommonModule,ProductCardComponent],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {

  products: Product[] = [];
  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }
}
