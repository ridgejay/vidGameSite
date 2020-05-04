import { Component, OnInit } from '@angular/core';





@Component({
  selector: "app-games",
  templateUrl: "./games.component.html",
  styleUrls: ["./games.component.css"],
})
export class GamesComponent implements OnInit {


  filterData = [
    {
      stock: 20,
      title: "Spongebob Squarepants: Battle for Bikini Bottom",
      price: "$24.99",
    },
    {
      stock: 17,
      title: "Friday the 13th: The Game Slasher Edition",
      price: "$27.99",
    },
    {
      stock: 39,
      title: "Animal Crossing: New Horizons",
      price: "$59.99",
    },
    {
      stock: 4,
      title: "Super Mario Bros.V: Deluxe",
      price: "$34.99",
    },
    {
      stock: 11,
      title: "Yoshi's Crafted World",
      price: "$29.99",
    },
    {
      stock: 19,
      title: "PixArk",
      price: "$44.99",
    },
    {
      stock: 5,
      title: "Luigi's Mansion 3",
      price: "$59.99",
    },
    {
      stock: 22,
      title: "Marvel Ultimate Alliance 3: The Black Order",
      price: "$24.99",
    },
    {
      stock: 2,
      title: "NBA 2K Playgrounds 2",
      price: "$19.99",
    }
  ];

  constructor() {}

  ngOnInit() {}
}
