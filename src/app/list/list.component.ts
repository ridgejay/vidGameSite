import { Component, OnInit } from '@angular/core';
import { goods } from '../goods';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  good = goods;

  constructor() { 
    
  }

  ngOnInit() {
   
  }

}
