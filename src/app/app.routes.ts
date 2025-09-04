import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Products } from './products/products';
import { Details } from './details/details';

export const routes: Routes = [
    {path: "", component: Home},
    {path: "products", component: Products},
    {path: "details/:id", component: Details}
];
