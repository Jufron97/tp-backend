import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { environment as env } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  urlBackend = 'http://localhost:4000/';

  users: any[] = [];
  tokenAPI:any;

  constructor(
    private authService: AuthService,
    private http: HttpClient){
  }

  private getToken(){
    let body = { 
      'grant_type': "client_credentials",
      "client_id": env.dev.ApiClientId,
      "client_secret": env.dev.ApiClientSecret,
      'audience': env.dev.audience
    }
    this.http.post("https://"+`${env.dev.domain}`+"/oauth/token", body)
    .subscribe(token => {
      return token})   
  }

  public getUsers() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ this.tokenAPI.access_token
      })
    };
    this.authService.getAccessTokenWithPopup
    return this.http.get(`${env.dev.audience}`+"users", httpOptions)        
  }

  getPedidos(){
    console.log("Pedidos consultados");
    //Aca hay que ir al arreglo del usuario y tomar los pedidos que esten en pendientes y que sean menores la fecha
    return this.http.get<any>(this.urlBackend + 'user' + '/list-pedidos')
  }

}


