import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { AppComponent } from '../app.component';
import { CommunicationService } from '../communication.service';

import { MatDialogRef } from '@angular/material/dialog/dialog-ref';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '../alert/alert.component';
import {

  MAT_DIALOG_DATA,
  MatDialogConfig
} from "@angular/material/dialog";

import { LineChartComponent } from '../line-chart/line-chart.component';
@Component({
  selector: 'app-swalalert',
  templateUrl: './swalalert.component.html',
  styleUrls: ['./swalalert.component.css']
})
export class SwalalertComponent implements OnInit {
  // @ViewChild('AppComponent', { static: true }) AppComponent!: AppComponent;
  // @ViewChild('AlertComponent')
  // showModal: boolean = false;

  message: any;
  messagee:any;
warning:any
types:any
  submittedData: any;
  constructor(private communicationService: CommunicationService,


    private dialog: MatDialog) {}

  ngOnInit(): void {

    this.message = {
      message : "This is alert Modal...",
      types:"success"
    }
    this. messagee= {
      message : "This is alert Modal...",
      messageTypee:"warning"
    }
  }
  warningAlert(message: string,messageTypee:string) {
    this.communicationService.showWar(message,messageTypee);

  }

  successSwal(message: string,types:string) {

    this.communicationService.showSuccesss(message,types);
  }
}