import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ReportingComponent } from './pages/reporting/reporting.component';
import { SidebarComponent } from './pages/components/sidebar/sidebar.component';
import { SalarieComponent } from './pages/salarie/salarie.component';
import { NewSalarieComponent } from './pages/new-salarie/new-salarie.component';
import { ParametresSmtpComponent } from './pages/parametres-smtp/parametres-smtp.component';
import { TopbarComponent } from './pages/components/topbar/topbar.component';
import { NewReportingComponent } from './pages/new-reporting/new-reporting.component';
import { EditReportingComponent } from './pages/edit-reporting/edit-reporting.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ReportingComponent,
    SidebarComponent,
    SalarieComponent,
    NewSalarieComponent,
    ParametresSmtpComponent,
    TopbarComponent,
    NewReportingComponent,
    EditReportingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxDropzoneModule,
    AppRoutingModule,
    NgbModule,

    FormsModule,
    ReactiveFormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
