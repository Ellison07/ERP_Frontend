import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { UpdateComponent } from './update/update.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { DataComponent } from './data/data.component';
import { DevopsComponent } from './devops/devops.component';
import { DotnetComponent } from './dotnet/dotnet.component';
import { JavaComponent } from './java/java.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { HistoryComponent } from './history/history.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path:'admin',component: AdminComponent},
  {path:'user/:username',component: UserComponent},
  {path:'register',component:RegisterComponent},
  {path:'about',component:AboutComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'employeelist/:id',component:EmployeelistComponent},
  {path:'java',component:JavaComponent},
  {path:'data',component:DataComponent},
  {path:'devops',component:DevopsComponent},
  {path:'dotnet',component:DotnetComponent},
  {path:'payment/:id',component:PaymentComponent},
  {path:'history/:id',component:HistoryComponent},
  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  {path:'confirmation/:id',component:ConfirmationComponent},
  {path:'',redirectTo:'root',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
