import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(public localService: LocalService) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() {
    if (this.localService.selectedLocal != undefined && this.localService.selectedLocal._id) {

      this.localService.getProductos(this.localService.selectedLocal._id).subscribe(
        res => {
          this.localService.productos = res;
        },
        err => console.log(err))


    }

  }



}
