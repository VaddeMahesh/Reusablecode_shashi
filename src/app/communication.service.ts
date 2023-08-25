// communication.service.ts

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private messageSource = new Subject<any>(); // Use 'any' type here

  showMessagetoast$ = this.messageSource.asObservable();

  showSuccess(message: string,messagetypes:string ) {
    this.messageSource.next({  message,messagetypes });
  }
  private messageSourcee = new Subject<any>(); // Use 'any' type here

  showMessagee$ = this.messageSourcee.asObservable();

  showSuccesss(message: string,types:string ) {

    this.messageSourcee.next({ message,types });
  }
  private messageSour = new Subject<any>(); // Use 'any' type here

  showMsg$ = this.messageSour.asObservable();

  showWar(message: string,messageTypee:string) {
    this.messageSour.next({message,messageTypee });
  }


}
