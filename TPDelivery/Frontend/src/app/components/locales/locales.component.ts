import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Local } from 'src/app/models/local';
import { LocalService } from '../../services/local.service';

@Component({
  selector: 'app-locales',
  templateUrl: './locales.component.html',
  styleUrls: ['./locales.component.css']
})
export class LocalesComponent implements OnInit {

  constructor(public localService: LocalService,private router:Router) { }

  ngOnInit(): void {
    this.getLocales();
  }
    
  getLocales(){
    this.localService.getLocales().subscribe(
      res => {
        this.localService.locales = res;
      },
      err => console.log(err))
  }

  navigateProductos(local:Local){
    this.localService.selectedLocal=local;
    this.router.navigate(['productos']);
  }



}
