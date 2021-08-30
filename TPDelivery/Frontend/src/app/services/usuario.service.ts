import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'http://localhost:4000/';

  usuarios: Usuario[] = [];

  constructor(private http: HttpClient) {
   }

   signUp(usu:Usuario){
     this.http.post(this.url + '/registro-usuario', usu)
   }

   signIn(usu:Usuario){
     this.http.post(this.url + '/iniciar-sesion',usu)
   }

   getUsuarios(){
     this.http.get<Usuario[]>(this.url + '/list-usuario')
   }

   getUsuario(usuario:string){
    this.http.get<Usuario>(this.url + usuario + '/get-usuario')
  }

  deleteUsuario(id:string){
    this.http.delete(this.url + id + '/delete-usuario')
  }

  updateUsuario(id:string, usu:Usuario){
    this.http.put(this.url + id + '/update-usuario', usu)
  }

}
