import { Component, OnInit } from '@angular/core';
import { ListProductosComponent } from '../list-productos/list-productos.component';

@Component({
  selector: 'app-abm-local',
  templateUrl: './abm-local.component.html',
  styleUrls: ['./abm-local.component.css']
})
export class AbmLocalComponent implements OnInit {

  toggleProductos: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleChanged(event: any) {
    this.toggleProductos = event;
  }

  

}
