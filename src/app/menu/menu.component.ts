import { Component, Input, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let self=this;
    $('#top-menu')
    .sticky({
      })
    ;
  }

  toogle() {
    console.log("hellow");
    let self=this;
      $('.ui.labeled.icon.sidebar')
      .sidebar('toggle')
    ;
  }
  

}
