import { Local } from './../../models/local';
import { LocalService } from '../../services/local.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-local',
  templateUrl: './list-local.component.html',
  styleUrls: ['./list-local.component.css']
})
export class ListLocalComponent implements OnInit {

  @Output() toggleChanged = new EventEmitter<boolean>();
  id: any;
  listLocal: Local[] = [];
  toggleProductos: boolean = false;

  constructor(private localService: LocalService, private toastr: ToastrService, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.obtenerLocales();
  }

  obtenerLocales() {
    this.localService.getLocales().subscribe(data => {
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

  deleteLocal(id: any) {
    this.localService.deleteLocal(id).subscribe(data => {
      this.toastr.error('El Local fue eliminado con exito', 'Local eliminado');
      this.obtenerLocales();
    }, error => {
      console.log(error);
    })
  }

  cargaProductos(local: Local) {

    if (this.localService.selectedLocal?._id === local._id) {
      this.toggleProductos = !this.toggleProductos;
      this.toggleChanged.emit(this.toggleProductos);
    }
    else {
      this.localService.selectedLocal = local;
      this.toggleProductos = true;
      this.toggleChanged.emit(this.toggleProductos);
    }

  }


}
