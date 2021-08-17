import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../services/local.service';

@Component({
  selector: 'app-locales',
  templateUrl: './locales.component.html',
  styleUrls: ['./locales.component.css']
})
export class LocalesComponent implements OnInit {

  constructor(public localService: LocalService) { }

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



}
