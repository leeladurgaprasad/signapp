import { Component, Input, OnInit, AfterViewChecked } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-firstcomp',
  templateUrl: './firstcomp.component.html',
  styleUrls: ['./firstcomp.component.css']
})
export class FirstcompComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('#left-menu').first()
  .sidebar('setting', {transition: 'push'})
  .sidebar('attach events', '.mobile-button')
;

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
