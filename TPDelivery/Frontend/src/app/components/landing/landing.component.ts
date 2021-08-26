import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  var autocomplete: HTMLInputElement = document.getElementById("direccionInput") as HTMLInputElement;

  const search=new google.maps.places.Autocomplete(autocomplete);

  }




}
