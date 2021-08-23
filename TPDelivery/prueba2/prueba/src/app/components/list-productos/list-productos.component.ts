import { Local, Producto } from './../../models/local';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrls: ['./list-productos.component.css']
})
export class ListProductosComponent implements OnInit {

  idL: any = this.cargaId();
  nomLoc: any = this.cargaNombre();

  constructor(public localService: LocalService, private toastr: ToastrService, private aRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.obtenerProductos()
  }

  public obtenerProductos() {
    this.localService.getProductos(this.idL).subscribe(data => {
      this.localService.productos = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarProducto(idL: any, idP: any) {
    this.localService.deleteProductos(idL, idP).subscribe(data => {
      this.toastr.error('El producto fue eliminado con exito', 'Producto eliminado');
      this.obtenerProductos();
    }, error => {
      console.log(error);
    })
  }

  cargaNombre() {
    if (this.localService.selectedLocal != undefined) {
      return this.localService.selectedLocal.nombre;
    }
    return "No se encuentra un local seleccionado";
  }

  cargaId() {
    if (this.localService.selectedLocal != undefined) {
      return this.localService.selectedLocal._id;
    }
    return "";
  };

  ngOnChanges(){
    this.obtenerProductos();
  }

}

