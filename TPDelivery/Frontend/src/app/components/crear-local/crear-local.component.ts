import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Local } from 'src/app/models/local';

@Component({
  selector: 'app-crear-local',
  templateUrl: './crear-local.component.html',
  styleUrls: ['./crear-local.component.css']
})

export class CrearLocalComponent implements OnInit {

  titulo:string ="Crear Local";

  localForm: FormGroup;
  constructor(private fb:FormBuilder) { 
    this.localForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  addLocal(){
    //let newLocal: Local = new Local(
      //this.localForm.get('nombre')?.value,
      //this.localForm.get('descripcion')?.value,
    //)
  }

}
