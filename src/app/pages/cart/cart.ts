import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../core/services/cart-item.service';
import { CartItem } from '../../core/models/cart-item.model';


@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {

  constructor(public cartService: CartService) {}

  increase(id: number){
    this.cartService.increaseQuantity(id);
  }

  decrease(id: number){
    this.cartService.decreaseQuantity(id);
  }

  remove(id: number) {
    this.cartService.removeFromCart(id);
  }
}
