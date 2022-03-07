import { Component, OnInit } from '@angular/core';
import { addSyntheticLeadingComment } from 'typescript';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  locales: any = [
    {
      nombre: 'Mc Auto',
      direccion: 'Av. Pellegrini 1402',
      lat: -32.956350,
      long: -60.645160
    },
    {
      nombre: 'Rosario Burger',
      direccion: 'Dorrego 1349',
      lat: -32.951424,
      long: -60.650818
    },
    {
      nombre: 'Kingdom Burger',
      direccion: 'San Juan 1486',
      lat: -32.949110,
      long: -60.644400
    },
    {
      nombre: 'Madame Safó',
      direccion: 'Dorrego 1034',
      lat: -32.947660,
      long: -60.649896
    },
    {
      nombre: 'Brooklyn Garden',
      direccion: 'Tucumán 1294',
      lat: -32.941230,
      long: -60.639630
    }
  ];
  title = 'prueba';
  lat: number = -32.948615;
  lng: number = -60.645703;
  zoom: number = 15;
  located: boolean = false;

  getPosition(){
    navigator.geolocation.getCurrentPosition( pos => {
      this.lat = pos.coords.latitude;
      this.lng = pos.coords.longitude;
      this.zoom = 16;
      this.located = true;
    })
  }

}
