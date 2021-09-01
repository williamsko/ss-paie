import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EditReportingComponent } from './pages/edit-reporting/edit-reporting.component';
import { HomeComponent } from './pages/home/home.component';
import { KeyActivationComponent } from './pages/key-activation/key-activation.component';
import { LoginComponent } from './pages/login/login.component';
import { NewReportingComponent } from './pages/new-reporting/new-reporting.component';
import { NewSalarieComponent } from './pages/new-salarie/new-salarie.component';
import { ParametresSmtpComponent } from './pages/parametres-smtp/parametres-smtp.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ReportingComponent } from './pages/reporting/reporting.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { SalarieComponent } from './pages/salarie/salarie.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
        children: [{ path: '', redirectTo: 'login', pathMatch: 'full' }],
      },
      { path: 'key-activation', component: KeyActivationComponent },
      { path: '', component: LoginComponent },
      { path: 'register', component: RegistrationComponent },
      { path: 'home', component: HomeComponent },
      { path: 'reporting', component: ReportingComponent },
      { path: 'salaries', component: SalarieComponent },
      { path: 'new-salarie', component: NewSalarieComponent },
      { path: 'param-smtp', component: ParametresSmtpComponent },
      { path: 'new-reporting', component: NewReportingComponent },
      { path: 'reset-password', component: ResetPasswordComponent },
      { path: 'edit-reporting/:code', component: EditReportingComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
