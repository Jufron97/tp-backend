import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuarioForm: FormGroup;
  signInForm: FormGroup;

  usu: Usuario = {
    usuario: '',
    contrasena: '',
    nombreApellido: '',
    direccion: '',
    telefono: '',
    email: ''
  };

  usuarioVacio: Usuario = {
    usuario: '',
    direccion: ''
  }

  constructor(private router: Router, private fb: FormBuilder, private toastr: ToastrService, public usuarioService: UsuarioService) {
    this.usuarioForm = this.fb.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required],
      nombreApe: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
      direccion: ['', Validators.required]
    })
    this.signInForm = this.fb.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required]
    })
  }

  ngOnInit(): void {

  }


  signUp() {
    this.usuarioService.signUp(this.usu).subscribe(
      res => {
        this.toastr.success('Usuario registrado', 'Su usuario ha sido registrado con éxito, puede proceder a iniciar sesión');
        localStorage.setItem('token', res.token);
      },
      err => {
        console.log(err);
        this.toastr.error('Error', 'Error al registrar el usuario');
        this.usuarioForm.reset();
      }
    )
    let cerrarButton: HTMLElement = document.getElementById("cerrarButton2") as HTMLElement;
    cerrarButton.click();
  }

  signIn() {
    this.usuarioService.signIn(this.usu).subscribe(
      res => {
        this.toastr.success('Sesión iniciada', 'Se ha iniciado sesión con éxito');
        localStorage.setItem('token', res.token);
        this.getUsuario(res.token);
      },
      err => {
        console.log(err);
        this.toastr.error('Error', 'Usuario inexistente');
        this.limpiar();
        this.signInForm.reset();
      }
    )

    let cerrarButton: HTMLElement = document.getElementById("cerrarButton1") as HTMLElement;
    cerrarButton.click();
  }


  signOut() {

    this.usuarioService.selectedUsuario = this.usuarioVacio;
    this.usu = this.usuarioVacio;
    this.signInForm.reset();
    this.usuarioForm.reset();
    this.usuarioService.logOut();

  }

    limpiar() {

      this.usu = this.usuarioVacio;
      this.usuarioForm.reset();
      this.signInForm.reset();

    }


  getUsuario(id: string) {
    console.log(id);
    this.usuarioService.getUsuario(id).subscribe(
      data => {
        console.log(data);
        this.usuarioService.selectedUsuario = <Usuario>data;
        console.log(this.usuarioService.selectedUsuario);
        localStorage.setItem('usuario', JSON.stringify(this.usuarioService.selectedUsuario));
      },
      err => {
        console.log(err);
        this.toastr.error('Error', 'Usuario inexistente');
      }
    )
  }


}
