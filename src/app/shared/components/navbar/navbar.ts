import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CartService } from '../../../core/services/cart-item.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  cartCount$!: Observable<number>;

  constructor(private cartService: CartService){
    this.cartCount$ = this.cartService.cartCount$;
  }
}
