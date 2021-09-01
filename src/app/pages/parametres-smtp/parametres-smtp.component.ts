import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ParamSmtpService } from '../../services/param-smtp.service';

@Component({
  selector: 'app-parametres-smtp',
  templateUrl: './parametres-smtp.component.html',
  styleUrls: ['./parametres-smtp.component.scss'],
})
export class ParametresSmtpComponent implements OnInit {
  form: FormGroup;
  paramSMTP: any;
  errorMessage: string;
  successMessage: string;
  shouldDisplayErrorMessage = false;
  shouldDisplaySuccessMessage = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private paramSmtpService: ParamSmtpService
  ) {}

  ngOnInit() {
    this.paramSMTP = JSON.parse(localStorage.getItem('SMTP'));
    this.form = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    if (this.paramSMTP !== null) {
      return this.formBuilder.group({
        identifiant: [this.paramSMTP.identifiant, Validators.required],
        password: [this.paramSMTP.password, Validators.required],
        domain: [this.paramSMTP.domain, Validators.required],
        port: [this.paramSMTP.port, Validators.required],
      });
    }
    return this.formBuilder.group({
      identifiant: ['', Validators.required],
      password: ['', Validators.required],
      domain: ['', Validators.required],
      port: ['', Validators.required],
    });
  }

  addParametreSMTP(): void {
    console.log(this.form.valid);
    if (!this.form.valid) {
      this.errorMessage = 'Vous devez remplir tous les champs';
      this.shouldDisplayErrorMessage = true;
    } else {
      this.shouldDisplayErrorMessage = false;

      const identifiant = this.form.get('identifiant').value;
      const password = this.form.get('password').value;
      const domain = this.form.get('domain').value;
      const port = this.form.get('port').value;
      this.callAddParametreSTMPAPI(identifiant, password, domain, port);
    }
  }

  private callAddParametreSTMPAPI(
    identifiant: string,
    password: string,
    domain: string,
    port: number
  ): void {
    this.paramSmtpService.createParamSMTP(identifiant, password, domain, port);
    this.successMessage = 'Vos paramètres SMTP ont bien été enrégistrés';
    this.shouldDisplaySuccessMessage = true;
  }
}
