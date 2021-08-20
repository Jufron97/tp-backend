import { Local } from './../../models/local';
import { LocalService } from '../../services/local.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-local',
  templateUrl: './list-local.component.html',
  styleUrls: ['./list-local.component.css']
})
export class ListLocalComponent implements OnInit {

  id: any;
  listLocal: Local[] = [];
  constructor( private localService:LocalService, private toastr : ToastrService, config: NgbModalConfig, private modalService: NgbModal) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.obtenerLocales();
  }

  obtenerLocales() {
    this.localService.getLocales().subscribe( data => {
      console.log(data);
      this.listLocal = data;
    }, error => {
      console.log(error);
    })
  }

  open(content: any, id: any) {
    this.modalService.open(content);
    this.id = id;
  }

  deleteLocal( id:any ) {
    this.localService.deleteLocal(id).subscribe( data => {
      this.toastr.error('El Local fue eliminado con exito', 'Local eliminado');
      this.obtenerLocales();
    }, error => {
      console.log(error);
    })
  }

  cargaProductos(local:Local){

    this.localService.selectedLocal=local;

  }


}
