import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlBackend = 'http://localhost:4000/';
  private httpOptions : any;
  users: any[] = [];

  constructor(
    private http: HttpClient){
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+ localStorage.getItem("tokenAPI")
        }),
      };
    }

  private getToken(){
    let APIbody = { 
      'grant_type': "client_credentials",
      "client_id": env.dev.ApiClientId,
      "client_secret": env.dev.ApiClientSecret,
      'audience': env.dev.audience
    }
    this.http.post("https://"+`${env.dev.domain}`+"/oauth/token", APIbody)
    .subscribe((token:any) => {
      localStorage.setItem("tokenAPI", token.access_token)
      localStorage.setItem("scopesAPI",JSON.stringify(token.scope))
    })   
  }

  public getUsers() {
    this.getToken();
    return this.http.get(`${env.dev.audience}`+"users", this.httpOptions)        
  }

  public deleteUser(userID:any){
    this.getToken();
    return this.http.delete(`${env.dev.audience}users/${userID}`,this.httpOptions)
  } 

  public editUserByID(userID:any,body:any){
    this.getToken();
    return this.http.patch(`${env.dev.audience}users/${userID}`,this.httpOptions,body)
  } 

  getPedidos(){
    console.log("Pedidos consultados");
    //Aca hay que ir al arreglo del usuario y tomar los pedidos que esten en pendientes y que sean menores la fecha
    return this.http.get<any>(this.urlBackend + 'user' + '/list-pedidos')
  }

}


