import { Component, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';
import { CommunicationService } from '../communication.service';
import { alerts } from '../config';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {


  @ViewChild('AppComponent', { static: true }) AppComponent!: AppComponent;
  msg = alerts.Message;
  message:any
  errormessage:any;
  warningmessage:any;
  constructor(private communicationService: CommunicationService) { }

  ngOnInit(): void {
    this.message = {
      message : "This is alert Modal...",
      messagetypes:"warning"
    }

  }
  showAlert(message: string,messagetypes:string) {
    this.communicationService.showSuccess(message,messagetypes);

  }

}
