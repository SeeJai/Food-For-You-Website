import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private items: CartItem[] = [];

    private cartCountSubject = new BehaviorSubject<number>(0);
    cartCount$ = this.cartCountSubject.asObservable();

    getCartItems() {
        return this.items;
    }

    addTocart(product: Product) {
        const existingItem = this.items.find(
            item => item.productId === product.id);
        
            if(existingItem) {
                existingItem.quantity++;
            } else {
                this.items.push({
                    productId: product.id,
                    name: product.name,
                    price:product.price,
                    image: product.image,
                    quantity: 1
                });
            }
            this.updateCartCount();
    }

    removeFromCart(productId: number) {
        this.items = this.items.filter(
            item => item.productId !== productId
        );
        this.updateCartCount();
    }

    getTotalAmount(){
        return this.items.reduce(
            (total, item) => total + item.price * item.quantity,0
        );
    }

    private updateCartCount(){
        const count = this.items.reduce((total, item) => total + item.quantity,0);
        this.cartCountSubject.next(count);
        
    }
}