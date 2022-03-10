import { Local, Producto } from './../../models/local';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalService } from 'src/app/services/local.service';
import { MessageService } from 'src/app/services/message-service.service';

@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrls: ['./list-productos.component.css']
})
export class ListProductosComponent implements OnInit {

  idL: any;
  nomLoc: any;
  productoVacio: Producto = {
    nombre: '',
    descripcion: '',
    categoria: '',
    precio: 0,
    subcategoria: ''
  };

  @Output() openProductoModal = new EventEmitter<Local>();
  @Output() onFilter = new EventEmitter();

  constructor(public localService: LocalService, private toastr: ToastrService, private aRouter: ActivatedRoute, private _messageService: MessageService) {
    this._messageService.listen().subscribe((m: any) => {
      this.ngOnInit();
    })
  }

  ngOnInit(): void {
    this.cargaNombre();
    this.cargaId();
    this.obtenerProductos()
  }

  obtenerProductos() {
    this.localService.getProductos(this.idL).subscribe(data => {
      this.localService.productos = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarProducto(idL: any, nomProd: any) {
    this.localService.deleteProductos(idL, nomProd).subscribe(data => {
      this.toastr.error('El producto fue eliminado con exito', 'Producto eliminado');
      this.obtenerProductos();
    }, error => {
      console.log(error);
    })
  }

  cargaNombre() {
    if (this.localService.selectedLocal != undefined) {
      this.nomLoc = this.localService.selectedLocal.nombre;
    }
  }

  cargaId() {
    if (this.localService.selectedLocal != undefined) {
      this.idL = this.localService.selectedLocal._id;
    }
  };


  openModal(producto: Producto) {
    if(producto!==this.productoVacio){
      //this.onFilter.emit('Edit');
      this._messageService.filter(producto.nombre);
      this.localService.selectedProducto=producto;
      this.openProductoModal.emit(this.localService.selectedLocal);
    }
    else{
    this._messageService.filter("");
    this.localService.selectedProducto=producto;
    this.openProductoModal.emit(this.localService.selectedLocal);
    }

  }

}

