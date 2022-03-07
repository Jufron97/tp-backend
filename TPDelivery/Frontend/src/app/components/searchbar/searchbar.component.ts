import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';
import { MessageService } from 'src/app/services/message-service.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  @Input() tipo: string = "";
  @Output() onFilter = new EventEmitter();

  constructor(private localService: LocalService, private _messageService: MessageService) { }

  ngOnInit(): void {
  }

  onKey(event: any) {

    if (this.tipo === "locales") {
      //this.onFilter.emit('Register click');
      this._messageService.filter(event.target.value);
    }
    else if (this.tipo === "productos") {
      //this.onFilter.emit('Register click');
      this._messageService.filter(event.target.value);
    }

  }

}
