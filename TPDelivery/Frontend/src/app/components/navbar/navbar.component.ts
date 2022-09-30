import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { ToastrService } from 'ngx-toastr';
import { ButtonLoginComponent } from '../button-login/button-login.component';

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
  
  /*
  cerrarSesion(){
    this.authService.logout();
  }

  iniciarSesion(){
    this.authService.loginWithRedirect({screen_hint: "signup"});
  }
  */
  
}
