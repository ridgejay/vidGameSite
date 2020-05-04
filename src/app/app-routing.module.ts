import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from "./list/list.component";
import { DetailsComponent } from "./details/details.component";
import { CartComponent } from "./cart/cart.component";
import { GamesComponent } from './games/games.component';


const routes: Routes = [
  {
    path: "list",
    component: ListComponent,
    data: { title: "List of Goods" }
  },
  {
    path: "details/:id",
    component: DetailsComponent,
    data: { title: "Good Details" }
  },
  {
    path: "cart",
    component: CartComponent
  },
  {
    path: "games",
    component: GamesComponent
  },
  {
    path: "",
    redirectTo: "/list",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
