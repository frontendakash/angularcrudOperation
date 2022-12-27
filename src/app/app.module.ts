import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginComponent } from './login/login.component';


import { AppRoutingModule } from './app-routing.module';
import { CustomInterceptor } from './Services/custom.interceptor';
import { AdminRollComponent } from './admin-roll/admin-roll.component';
import { HeaderComponent } from './header/header.component';






@NgModule({
  declarations: [
    AppComponent,
    EditUserComponent,
    LoginComponent,
    AdminRollComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
