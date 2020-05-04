import { Component, OnInit } from '@angular/core';
import { goods } from '../goods';
import { ActivatedRoute, Router } from "@angular/router";
import { CartService } from "../cart.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  details = {
    id: null,
    name: "",
    image: "",
    description: "",
    price: null
  };

  goods = goods;

  addToCart(goods) {
    window.alert("Your product has been added to the cart!");
    this.cartService.addToCart(goods);
  }

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    private cartService: CartService
  ) {}

  ngOnInit() {
    if (this.route.snapshot.paramMap.get("id") !== "null") {
      const id = parseInt(this.route.snapshot.paramMap.get("id"), 0);
      this.details = this.goods.find(x => x.id === id);
    }
  }
}
