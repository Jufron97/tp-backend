import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/local';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  titulo = 'Crear Producto';
  idL: any;
  idP: any;
  productoForm: FormGroup;
  constructor(private fb:FormBuilder, private router:Router,private toastr: ToastrService,private localService:LocalService,private aRouter: ActivatedRoute) {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      categoria: ['', Validators.required],
      subcategoria: ['', Validators.required],
      stock: ['', Validators.required],
      precio: ['', Validators.required]
    })
    this.idL = this.aRouter.snapshot.paramMap.get('idL');
    this.idP = this.aRouter.snapshot.paramMap.get('idP');
    this.esEditar();
  }

  ngOnInit(): void {
  }
  
  addProduct(){

    let newProd: Producto = {
      nombre: this.productoForm.get('nombre')?.value,
      descripcion: this.productoForm.get('descripcion')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      subcategoria: this.productoForm.get('subcategoria')?.value,
      stock: this.productoForm.get('stock')?.value,
      precio: this.productoForm.get('precio')?.value,
    }

    if(this.idP != null){
      this.localService.editarProductos(this.idL,this.idP,newProd).subscribe( data => {
        this.toastr.info('Producto Actualizado', 'El producto fue actualizado con exito');
        this.router.navigate(['/listar-producto/'+this.idL]);
      }, error => {
        console.log(error);
        this.productoForm.reset();
      })
    } else {
      
      this.localService.guardarProductos(this.idL,newProd).subscribe( data => {
        this.toastr.success('Producto Registrado', 'El producto fue registrado con exito');
        this.router.navigate(['/listar-producto/'+this.idL]);
      }, error => {
        console.log(error);
        this.productoForm.reset();
      })

    }

  }

  esEditar() {

    if(this.idP != null){
      this.titulo = 'Editar Producto';
      console.log(this.idL);
      console.log(this.idP);
      this.localService.obtenerProductos(this.idL,this.idP).subscribe( data => {
        console.log(data);
        this.productoForm.setValue({
          nombre: data.nombre,
          descripcion: data.descripcion,
          categoria: data.categoria,
          subcategoria: data.subcategoria,
          stock: data.stock,
          precio: data.precio
        })
      }, error => {
        console.log(error);
        this.productoForm.reset();
      })
    }
  }
}
