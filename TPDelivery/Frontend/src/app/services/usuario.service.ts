import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'http://localhost:4000/';

  usuarios: Usuario[] = [];
  selectedUsuario: Usuario = {
    _id: '',
    usuario: '',
    contrasena: '',
    nombreApellido: '',
    telefono: '',
    direccion: '',
    email: '',
  };

  constructor(private http: HttpClient, private router: Router) {
  }

  signUp(usu: Usuario) {
    return this.http.post<any>(this.url + 'user' + '/registro-usuario', usu)
  }

  signIn(usu: Usuario) {
    return this.http.post<any>(this.url + 'user' + '/iniciar-sesion', usu)
  }

  getUsuarios() {
    return this.http.get<Usuario[]>(this.url + 'user' + '/list-usuario')
  }

  getUsuario(id: string) {
    return this.http.get(this.url + 'user/' + id + '/get-usuario')
  }

  deleteUsuario(id: string) {
    return this.http.delete<Usuario>(this.url + 'user/' + id + '/delete-usuario')
  }

  updateUsuario(id: string, usu: Usuario) {
    return this.http.put<any>(this.url + 'user/' + id + '/update-usuario', usu)
  }


  loggedIn() {
    if (localStorage.getItem('token')) {
      return true;
    } else return false;
  }

  getToken() {
    if (localStorage.getItem('token')) {
      return localStorage.getItem('token')
    } return '';
  }

  getUser() {
    return JSON.parse(<string>localStorage.getItem('usuario'));
  }

  getUserName() {
    let usu: Usuario = JSON.parse(<string>localStorage.getItem('usuario'));
    if (usu) {
      return usu.usuario;
    } return '';
  }

  getDireccion() {
    let usu: Usuario = JSON.parse(<string>localStorage.getItem('usuario'));
    if (usu) {
      return usu.direccion;
    } return '';
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/']);
  }

}
