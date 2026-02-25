import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Menu } from './pages/menu/menu';
import { ProductDetails } from './pages/product-details/product-details';
import { Cart } from './pages/cart/cart';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
export const routes: Routes = [
    { path: '', component : Home},
    {path: 'menu', component :Menu},
    {path: 'product/:id', component : ProductDetails},
    {path: 'cart', component : Cart},
    {path: 'about', component : About},
    {path: 'contact', component : Contact},
];
