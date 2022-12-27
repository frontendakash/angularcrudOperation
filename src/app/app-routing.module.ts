import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRollComponent } from './admin-roll/admin-roll.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "header", component: HeaderComponent,  children:[
    { path: "AdminDashBoard", component: AdminRollComponent },
    { path: "UserDashBoard", component: EditUserComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
