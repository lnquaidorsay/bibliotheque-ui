import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookPageComponent } from './book/book-page.component';
import { CustomerPageComponent } from './customer/customer-page.component';
import { LoanPageComponent } from './loan/loan-page.component';
import { MenuComponent } from './menu/menu/menu.component';

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'book-page', component: BookPageComponent},
  {path: 'customer-page', component: CustomerPageComponent},
  {path: 'loan-page', component: LoanPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
