import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModelsComponent } from './models/models.component'; // Make sure to provide the correct path
import { LineChartComponent } from './line-chart/line-chart.component';

@Injectable({
  providedIn: 'root'
})
export class ModeldataService {

  private data: any[] = [];
  private showModal: boolean = false;
  private userData: any;
  constructor(private dialog: MatDialog) {} // Inject the MatDialog service



 // Store an array of data


  setData(data: any) {
    this.data.push(data); // Add the new data to the array
  }

  getData() {
    return this.data; // Return the entire array of data
  }


  openDialog(data: any,Component: any,width: any): void {
    if (!this.showModal) {
      this.showModal = true; // Show the modal

      const dialogRef: MatDialogRef<ModelsComponent> = this.dialog.open(Component, {
        width: 'auto',
        height:'90%',
        backdropClass: 'my-custom-dialog-backdrop',
        data: data,
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        this.showModal = false; // Close the modal
      });
    }
  }


}
