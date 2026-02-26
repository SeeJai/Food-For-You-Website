import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/models/product.model';
import { CartService } from '../../core/services/cart-item.service';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails {
  product?: Product;
  constructor(
  private route: ActivatedRoute,
  private productService: ProductService,
  private cartService: CartService
) {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.product = this.productService.getProducts()
    .find(p => p.id === id);
}

addToCart() {
  if (this.product) {
    this.cartService.addTocart(this.product);
  }
}
}
