import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProfileComponent } from './component/profile/profile.component';
import { TestComponent } from './component/test/test.component';
import { RegistrationFormComponent } from './component/registration-form/registration-form.component';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
      path: 'signin',
      component: SigninComponent
  },
  {
      path: 'signup',
      component: SignupComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'registration',
    component: RegistrationFormComponent
  }
];

@NgModule({
  imports: [ HttpClientModule, ReactiveFormsModule, BrowserModule, RouterModule.forRoot(routes)],
  // declarations: [AppComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
