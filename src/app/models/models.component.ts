import { Component, OnInit,Inject,Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModeldataService } from '../modeldata.service';
import { FormBuilder, FormGroup, FormArray, Validators, NgForm, FormControl } from '@angular/forms';

import { CommunicationService } from '../communication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css'],
})
export class ModelsComponent implements OnInit {
  title = 'my-angular-app';
  addUserForm !: FormGroup;
  submitted = false;
  message: any;
    constructor( public dialogRef: MatDialogRef<ModelsComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,private formBuilder: FormBuilder,private ModeldataService:ModeldataService,private communicationService: CommunicationService,private router: Router ) { }
    ngOnInit() {
      this.message = {
        message : "You have login Successfully",
        types:"success"
      }
      this.addUserForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        address: ['', Validators.required],
        password: ['', Validators.required],
        gender: ['' ,Validators.required],
        birthdate: ['',Validators.required],
        country: ['',Validators.required]
      });
    }
    // convenience getter for easy access to form fields
    get f() { return this.addUserForm.controls; }
    submitUser(message: string,types:string) {
      this.submitted = true;
      if (this.addUserForm.valid)
      {
        // Close the modal
        this.dialogRef.close();
        this.communicationService.showSuccess(message, types);

      }
      this.dialogRef.afterClosed().subscribe(() => {
        // Navigate to the desired route
        setTimeout(() => {
          this.router.navigate(['/sidenavbar']);
        }, 500);
      });
        // stop here if form is invalid
        if (this.addUserForm.invalid) {
            return;
        }

        const userData = this.addUserForm.value;
        this.ModeldataService.setData(userData);
    }


  }
