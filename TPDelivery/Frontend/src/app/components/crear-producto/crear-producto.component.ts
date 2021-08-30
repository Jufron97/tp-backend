import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/local';
import { LocalService } from 'src/app/services/local.service';
import { MessageService } from 'src/app/services/message-service.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})

export class CrearProductoComponent implements OnInit {

  titulo = 'Crear/Editar Producto';
  productoForm: FormGroup;
  @Input() selectedLocal: any;
  esEdit: boolean = false;
  nomProd: string = '';

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, public localService: LocalService, private aRouter: ActivatedRoute, private _messageService: MessageService) {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      categoria: ['', Validators.required],
      subcategoria: ['', Validators.required],
      precio: ['', Validators.required]
    })
    this._messageService.listen().subscribe((m: any) => {
      if (m!=="") {
        this.esEdit = true;
        this.nomProd = m;
      }
      else 
      {
        this.esEdit = false
      }

    })
  }

  ngOnInit(): void {
  }

  addProduct() {

    let newProd: Producto = {
      nombre: this.productoForm.get('nombre')?.value,
      descripcion: this.productoForm.get('descripcion')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      subcategoria: this.productoForm.get('subcategoria')?.value,
      precio: this.productoForm.get('precio')?.value,
    }

    if (this.esEdit) {
      this.localService.editarProductos(this.selectedLocal._id, this.nomProd, newProd).subscribe(data => {
        this.toastr.info('Producto Actualizado', 'El producto fue actualizado con exito');
      }, error => {
        console.log(error);
        this.productoForm.reset();
      })
    } else {

      console.log(this.selectedLocal._id);
      this.localService.guardarProductos(this.selectedLocal._id, newProd).subscribe(data => {
        this.toastr.success('Producto Registrado', 'El producto fue registrado con exito');
      }, error => {
        console.log(error);
        this.productoForm.reset();
      })

    }

    let cerrarButton: HTMLElement = document.getElementById("cerrarButton") as HTMLElement;

    cerrarButton.click();

  }


}
