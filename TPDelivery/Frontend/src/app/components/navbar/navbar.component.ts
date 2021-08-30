import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuarioForm: FormGroup;
  signInForm: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService, public usuarioService: UsuarioService) {
    this.usuarioForm = this.fb.group({
      usuario: ['', Validators.required],
      contraseña: ['', Validators.required],
      nombreApe: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
      direccion: ['', Validators.required]
    })
    this.signInForm = this.fb.group({
      usuario: ['', Validators.required],
      contraseña: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }


  signUp(){

  }

  signIn(){
    
  }



}
