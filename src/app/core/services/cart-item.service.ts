import {Injectable} from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private items: CartItem[] = [];

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
    }

    removeFromCart(productId: number) {
        this.items = this.items.filter(
            item => item.productId !== productId
        );
    }

    getTotalAmount(){
        return this.items.reduce(
            (total, item) => total + item.price * item.quantity,0
        );
    }

    getCartCount() {
        return this.items.reduce(
            (count, item) => count+ item.quantity,0
        );
    }
}