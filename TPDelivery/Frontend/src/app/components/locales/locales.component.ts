import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Local } from 'src/app/models/local';
import { MessageService } from 'src/app/services/message-service.service';
import { LocalService } from '../../services/local.service';

@Component({
  selector: 'app-locales',
  templateUrl: './locales.component.html',
  styleUrls: ['./locales.component.css']
})
export class LocalesComponent implements OnInit {

  constructor(
    public localService: LocalService,
    private router:Router,
    private route:ActivatedRoute ,
    private _messageService: MessageService) {
      this._messageService.listen().subscribe((m: string) => {
        if(m!==""){
          console.log(m);
          this.getLocalesName(m);
        }
        else{
        this.getLocales();
        }
    })
   }

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
    this.router.navigate(['/productos']);
  }

  getLocalesName(m:string){
    this.localService.getLocalesByName(m).subscribe(
      res => {
        this.localService.locales = res;
      },
      err => console.log(err))
  }
}
