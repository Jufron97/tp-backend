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

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, public localService: LocalService, private aRouter: ActivatedRoute, private _messageService: MessageService) {
    this.localForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      direccion: ['', Validators.required],
      costoEnvio: ['', Validators.required],
      tiempoEnvio: ['', Validators.required],
    })
    this._messageService.listen().subscribe((m: any) => {
      if (m!=="") {
        this.esEdit = true;
      }
      else{
        this.esEdit = false
      }
    })
  }

  ngOnInit(): void {
  }
  
  addLocal() { 
    let newLocal: Local = {
        nombre: this.localForm.get('nombre')?.value,
        direccion : this.localForm.get('direccion')?.value,
        descripcion : this.localForm.get('descripcion')?.value,
        costoEnvio : this.localForm.get('costoEnvio')?.value,
        tiempoEnvio : this.localForm.get('tiempoEnvio')?.value,
    }
    console.log(newLocal)
    if(this.esEdit){
      this.localService.editLocal(this.selectedLocal._id,newLocal).subscribe(data => {
        this.toastr.info('Local Actualizado', 'El local fue actualizado con exito');
      }
        , error => {
          console.log(error);
          this.localForm.reset();
        })
    } 
    else{
    this.localService.addLocal(newLocal).subscribe(data => {
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
}



