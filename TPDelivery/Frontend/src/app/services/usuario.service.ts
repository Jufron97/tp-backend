import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
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

  constructor(
    private http: HttpClient, 
    private router: Router,
    public auth:AuthService) {
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

  getPedidos(){
    console.log("Pedidos consultados");
    //Aca hay que ir al arreglo del usuario y tomar los pedidos que esten en pendientes y que sean menores la fecha
    return this.http.get<any>(this.url + 'user' + '/list-pedidos')
  }

}
