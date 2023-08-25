import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { AlertComponent } from './alert/alert.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { ClickDirective } from './click-directive.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwalalertComponent } from './swalalert/swalalert.component';
import { ModelsComponent } from './models/models.component';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MaterialmoduleModule } from './materialmodule/materialmodule.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FormsModule } from '@angular/forms';

import { LineChartComponent } from './line-chart/line-chart.component';
import { OpenmodelComponent } from './openmodel/openmodel.component';
import { TabsComponent } from './tabs/tabs.component';
import { NgxSpinnerModule } from 'ngx-spinner';

import { NgChartsModule } from 'ng2-charts';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { MatTooltipModule } from '@angular/material/tooltip';
@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    ClickDirective,
    SwalalertComponent,

    ModelsComponent,
    SidenavComponent,
    LineChartComponent,
    OpenmodelComponent,
    TabsComponent,




  ],
  imports: [
    HttpClientModule,CanvasJSAngularChartsModule,NgChartsModule,MatTooltipModule,
    BrowserModule,FormsModule,ReactiveFormsModule,NgxSpinnerModule,
    MatCardModule,

    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    AppRoutingModule,BrowserAnimationsModule, ToastrModule.forRoot({

      timeOut: 1500,

      positionClass: 'toast-top-center',

      preventDuplicates: true,

    }), MatButtonModule,
    MatDialogModule,
    MaterialmoduleModule
  ],
  providers: [ { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {}, },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
