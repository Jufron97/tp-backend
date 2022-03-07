import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Local } from 'src/app/models/local';
import { LocalService } from 'src/app/services/local.service';
import { MessageService } from 'src/app/services/message-service.service';

@Component({
  selector: 'app-crear-local',
  templateUrl: './crear-local.component.html',
  styleUrls: ['./crear-local.component.css']
})

export class CrearLocalComponent implements OnInit {

  titulo: string = "Crear Local";
  @Input() selectedLocal: any;
  localForm: FormGroup;
  esEdit: boolean = false;

  imagen: any;

  photoSelected: any;

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, public localService: LocalService, private aRouter: ActivatedRoute, private _messageService: MessageService) {
    this.localForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      direccion: ['', Validators.required],
      costoEnvio: ['', Validators.required],
      tiempoEnvio: ['', Validators.required],
    })
    this._messageService.listen().subscribe((m: any) => {
      if (m !== "") {
        this.esEdit = false;
      }
      else {
        this.esEdit = false
      }
    })
  }

  ngOnInit(): void {
  }

  addLocal() {
    const fd = new FormData();
    fd.append('nombre',this.localForm.get('nombre')?.value);
    fd.append('direccion',this.localForm.get('direccion')?.value);
    fd.append('descripcion',this.localForm.get('descripcion')?.value);
    fd.append('costoEnvio',this.localForm.get('costoEnvio')?.value);
    fd.append('tiempoEnvio',this.localForm.get('tiempoEnvio')?.value);
    fd.append('image',this.imagen);

    if (this.esEdit) {
      this.localService.editLocal(this.selectedLocal._id, fd).subscribe(data => {
        this.toastr.info('Local Actualizado', 'El local fue actualizado con exito');
      }
        , error => {
          console.log(error);
          this.localForm.reset();
        })
    }
    else {
      this.localService.addLocal(fd).subscribe(data => {
        this.toastr.success('Local Registrado', 'El local fue registrado con exito');
      }
        , error => {
          this.toastr.error(error)
          this.localForm.reset();
        })

    }
    let cerrarButton: HTMLElement = document.getElementById("cerrarButton") as HTMLElement;
    cerrarButton.click();
  }


  getImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.imagen = <File>event.target.files[0];
      //Preview imagen
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.imagen);
    }
  }

  limpiar() {

    this.localForm.reset();

  }

}


