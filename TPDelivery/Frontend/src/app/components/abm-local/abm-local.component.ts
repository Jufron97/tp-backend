import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListProductosComponent } from '../list-productos/list-productos.component';


@Component({
  selector: 'app-abm-local',
  templateUrl: './abm-local.component.html',
  styleUrls: ['./abm-local.component.css']
})
export class AbmLocalComponent implements OnInit {

  toggleProductos: boolean = false;
  selectedLocal: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleChanged(event: any) {
    this.toggleProductos = event;
  }

  openProductoModal(event: any) {

    let productoModalButton: HTMLElement = document.getElementById("openProductModalButton") as HTMLElement;
    this.selectedLocal=event;

    productoModalButton.click();

  }


  openLocalModal(event: any) {

    let localModalButton: HTMLElement = document.getElementById("openLocalModalButton") as HTMLElement;

    localModalButton.click();

  }



}
