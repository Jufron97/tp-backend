import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router, 
    private toastr: ToastrService, 
    public authService:AuthService) {

  }

  ngOnInit(): void {

  }
  
  datosUsuario(){
    this.authService.getUser().subscribe(user =>{console.log(user)});
    //this.authService.idTokenClaims$.subscribe(data => console.log(data))
  }

  cerrarSesion(){
    this.authService.logout();
  }

  iniciarSesion(){
    this.authService.loginWithPopup();
  }


}
