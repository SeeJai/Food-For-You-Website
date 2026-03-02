import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart-item.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCardComponent {
  constructor(private cartService: CartService){}

  isAdded = false;

  @Input() product!: Product;

  addToCart(event: Event) {
    event.stopPropagation();
    this.cartService.addTocart(this.product);

    this.isAdded = true;

    setTimeout(() => {
      this.isAdded = false;
    }, 1200);
  }
}