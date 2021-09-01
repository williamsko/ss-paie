import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ObjectUtility } from '../../shared/utils/object.utility';
import { Agent, Entreprise } from '../../shared/models/agent';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  shouldDisplayErrorMessage = false;
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    if (!ObjectUtility.isKeyActivated()) {
      this.router.navigate(['/key-activation']);
    }

    this.form = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public signin(): void {
    if (!this.form.valid) {
      this.shouldDisplayErrorMessage = true;
      this.errorMessage = 'Vous devez remplir tous les champs';
    } else {
      this.shouldDisplayErrorMessage = false;

      const username = this.form.get('username').value;
      const password = this.form.get('password').value;
      this.callLoginApi(username, password);
    }
  }

  private callLoginApi(username: string, password: string): void {
    const data = this.loginService.login(username, password);
    if (data == undefined) {
      this.shouldDisplayErrorMessage = true;
      this.errorMessage =
        'Vous ne pouvez pas vous connecter. Veuillez saisir correctement vos identifiants';
    } else {
      const entreprise: Entreprise = {
        address: data.entreprise.address,
        email: data.entreprise.email,
        phoneNumber: data.entreprise.phone_number,
        brandName: data.entreprise.brand_name,
        code: data.entreprise.code,
      };

      const agent: Agent = {
        address: data.address,
        code: data.code,
        firstName: data.firstName,
        lastName: data.lastName,
        phoneNumber: data.phoneNumber,
        entreprise: entreprise,
      };
      ObjectUtility.storeAgentInformation(agent);
      this.router.navigate(['/home']);
    }
  }

  public clearCache() {
    console.log('ACCOUNT');
    localStorage.removeItem('ACCOUNT');
    localStorage.removeItem('ADMIN');
    localStorage.removeItem('KEY');
    localStorage.removeItem('files');
  }
}
