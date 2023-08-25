import { Component, OnInit } from '@angular/core';
import { ModeldataService } from '../modeldata.service';
import { ModelsComponent } from '../models/models.component';

import { MatDialogRef } from '@angular/material/dialog/dialog-ref';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-openmodel',
  templateUrl: './openmodel.component.html',
  styleUrls: ['./openmodel.component.css']
})
export class OpenmodelComponent implements OnInit {
  submittedData:any
  constructor( private ModeldataService: ModeldataService,  private dialog: MatDialog) { }

  ngOnInit(): void {
    this.submittedData = this.ModeldataService.getData(); // Assign the array directly

  }
  openDialog(){
    let data={}
    this.ModeldataService.openDialog(data,ModelsComponent,'auto')
  }

}
