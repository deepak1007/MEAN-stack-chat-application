import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NormalpagesComponent } from './normalpages/normalpages.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  
  {path:'', component:NormalpagesComponent, children:[
    {path:'home', component:HomeComponent},
    {path:'login', component:LoginComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }