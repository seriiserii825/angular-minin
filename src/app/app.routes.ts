import {Routes, RouterLink} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {DetailsComponent} from './components/details/details.component';
import {ProductsComponent} from './components/products/products.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details'
  },
  {
    path: 'products',
    component: ProductsComponent,
    title: 'Product page'
  },
];
