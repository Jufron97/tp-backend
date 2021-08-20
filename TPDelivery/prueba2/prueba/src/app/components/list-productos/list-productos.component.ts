import { Local, Producto } from './../../models/local';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrls: ['./list-productos.component.css']
})
export class ListProductosComponent implements OnInit {

  idL: any;
  nomLoc: any;
  constructor( public localService:LocalService, private toastr : ToastrService, private router:Router, private aRouter: ActivatedRoute) { 
    this.idL = this.aRouter.snapshot.paramMap.get('idL');
  }

  ngOnInit(): void {
    this.getname(this.idL);
    this.obtenerProductos(this.idL);
  }

  obtenerProductos(idL : any) {
    this.localService.getProductos(idL).subscribe( data => {
      this.localService.productos = data;
    }, error => {
      console.log(error);
    })
  }

  getname(id: any){
    this.localService.getNombreLocal(this.idL).subscribe( data => {
      this.nomLoc = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarProducto( idL:any, idP:any  ) {
    this.localService.deleteProductos(idL,idP).subscribe( data => {
      this.toastr.error('El producto fue eliminado con exito', 'Producto eliminado');
      this.obtenerProductos(idL);
    }, error => {
      console.log(error);
    })
  }
}

