import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.css']
})
export class ListUsuarioComponent implements OnInit {

  users:any[]=[];

  constructor(
    public authService: AuthService,
    private http: HttpClient,){  
    }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(): void {
    //Primera parte se hace un metodo POST para poder obtener el Token y asi obtener los usuarios
    let body = { 
      'grant_type': "client_credentials",
      "client_id": env.auth.ApiClientId,
      "client_secret": env.auth.ApiClientSecret,
      'audience': env.auth.audience
    }
    this.http.post("https://"+`${env.auth.domain}`+"/oauth/token", body)
      .subscribe( (res:any) => {
          let httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+ res.access_token
            })
          };
          this.http.get(`${env.auth.audience}`+"users", httpOptions)
                    .subscribe( (result:any) => {
                      //console.log(result)
                      this.users =result
                    });
    })
    

  }

}
