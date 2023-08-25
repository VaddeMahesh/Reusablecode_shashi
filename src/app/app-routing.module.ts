import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenmodelComponent } from './openmodel/openmodel.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [{ path: '', redirectTo: '/Openmodel', pathMatch: 'full' },
{ path: 'Openmodel', component: OpenmodelComponent },
{ path:'sidenavbar',component:SidenavComponent},
{ path:'tabs',component:TabsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
