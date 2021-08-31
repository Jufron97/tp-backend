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
    usuario: '',
    direccion: ''
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

  getUsuario(usuario: string) {
    return this.http.get<Usuario>(this.url + 'user' + usuario + '/get-usuario')
  }

  deleteUsuario(id: string) {
    return this.http.delete<any>(this.url + 'user' + id + '/delete-usuario')
  }

  updateUsuario(id: string, usu: Usuario) {
    return this.http.put<any>(this.url + 'user' + id + '/update-usuario', usu)
  }


  loggedIn() {
    if (localStorage.getItem('token')) {
      return true;
    } else return false;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUserName(){
    return JSON.parse(<string>localStorage.getItem('usuario'));
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/']);
  }

}
