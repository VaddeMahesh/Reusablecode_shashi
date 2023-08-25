import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CommunicationService } from './communication.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { ModelsComponent } from './models/models.component';

import { ModeldataService } from './modeldata.service';
  import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogConfig
} from "@angular/material/dialog";
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title(title: any) {
    throw new Error('Method not implemented.');
  }
  isLoading: boolean = true;
  showModal: boolean = false;
  animations?: any[];
  matDialogRef: MatDialogRef<ModelsComponent> | undefined;
  constructor(private spinner: NgxSpinnerService,
    private communicationService: CommunicationService,
    private toastr: ToastrService,private dialog: MatDialog, private ModeldataService: ModeldataService
  ) {
    this.communicationService.showMessagetoast$.subscribe((data) => {
      this.showToastrMessage(data.message, data.messagetypes); // Access data.message and data.type
    });
    this.communicationService.showMessagee$.subscribe((data) => {
      this.showAlert(data.message, data.types); // Access data.message and data.type
    });
    this.communicationService.showMsg$.subscribe((data) => {
      this.showAle(data.message, data.messageTypee); // Access data.message and data.type
    });
  }
  ngOnInit() {
    this.loadData(); // Trigger loading data when the component initializes
  }


  showToastrMessage(message: string, messageType: 'success' | 'error' | 'warning'): void {
    const toastConfig = {
      timeOut: 3000 // Default time-out for all message types
    };

    switch (messageType) {
      case 'success':
        this.toastr.success(message, 'Success', toastConfig);
        break;
      case 'error':
        this.toastr.error(message, 'Error', toastConfig);
        break;
      case 'warning':
        this.toastr.warning(message, 'Warning', toastConfig);
        break;
      default:
        break;
    }
  }


  private async showAlert(message: string, messageType: 'success' ) {
    let alertTitle;
    let alertIcon: SweetAlertIcon | undefined;

    if (messageType === 'success') {
      alertTitle = 'Success';
      alertIcon = 'success';
    }

    const shouldProceed = await Swal.fire({
      title: 'Confirmation',
      text: 'Do you want to proceed with this action?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      allowOutsideClick: false,
    });

    if (shouldProceed.isConfirmed) {
      Swal.fire({
        title: alertTitle,
        text: message,
        icon: alertIcon,
        allowOutsideClick: false,
        // timerProgressBar: true,
      });
    }
  }
  private showAle(message: string, messageType: 'success' | 'error' | 'warning' | 'info') {
    let alertTitle: string;
    let alertIcon: SweetAlertIcon | undefined;

    switch (messageType) {
      case 'success':
        alertTitle = 'Success';
        alertIcon = 'success';
        break;
      case 'error':
        alertTitle = 'Error';
        alertIcon = 'error';
        break;
      case 'warning':
        alertTitle = 'Warning';
        alertIcon = 'warning';
        break;
      case 'info':
        alertTitle = 'Info';
        alertIcon = 'info';
        break;
      default:
        alertTitle = 'Alert';
        break;
    }

    Swal.fire({
      title: alertTitle,
      text: message,
      icon: alertIcon,
      allowOutsideClick: false, // Allow clicking outside to dismiss
      confirmButtonText: 'OK'
    });
  }


openDialog(): void {
  if (!this.showModal) {
    this.showModal = true; // Show the modal
    const dialogRef = this.dialog.open(ModelsComponent, {
      width: 'auto',
      height:'100%',
      backdropClass: 'my-custom-dialog-backdrop',
      data: { modalInput: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.showModal = false; // Close the modal
    });
  }
}

getServiceData(): string[] {
  return this.ModeldataService.getData();
}
loadData() {
  // Show the spinner
  this.spinner.show();
    // Simulate loading time (e.g., 2 seconds)
    setTimeout(() => {
      // Hide the spinner
      this.spinner.hide();
      this.isLoading = false; // Hide the loader
    }, 2000);
  }

}
