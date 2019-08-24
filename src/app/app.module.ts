import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/user/dashboard/dashboard.component';
import { HomeComponent } from './component/user/home/home.component';
import { SignupComponent } from './component/user/signup/signup.component';
import { SigninComponent } from './component/user/signin/signin.component';
import { ProfileComponent } from './component/user/profile/profile.component';
import { TestComponent } from './component/user/test/test.component';
import { RegistrationFormComponent } from './component/user/registration-form/registration-form.component';
import { RegistrationAdminComponent } from './component/admin/registration-admin/registration-admin.component';
import { LandingComponent } from './component/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    ProfileComponent,
    TestComponent,
    RegistrationFormComponent,
    RegistrationAdminComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
