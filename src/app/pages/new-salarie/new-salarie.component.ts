import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Salarie } from '../../shared/models/salarie';
import { ObjectUtility } from '../../shared/utils/object.utility';

@Component({
  selector: 'app-new-salarie',
  templateUrl: './new-salarie.component.html',
  styleUrls: ['./new-salarie.component.scss'],
})
export class NewSalarieComponent implements OnInit {
  form: FormGroup;
  errorMessage: string;
  shouldDisplayErrorMessage = false;
  title: string;

  shouldBeEdited = false;

  successMessage: string;
  shouldDisplaySuccessMessage = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.form = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    const salarie = localStorage.getItem('EDIT_SALARIE');
    if (salarie === null) {
      this.shouldBeEdited = false;
      this.title = 'Ajout d\'un nouveau salarié'
      return this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required],
        phone_number: ['', Validators.required],
        matricule: ['', Validators.required],
      });
    } else {
      this.shouldBeEdited = true;
      this.title = 'Modification information d\'un nouveau salarié'
      const data = JSON.parse(salarie);
      return this.formBuilder.group({
        firstName: [data.firstName, Validators.required],
        lastName: [data.lastName, Validators.required],
        email: [data.email, Validators.required],
        phone_number: [data.phone, Validators.required],
        matricule: [data.matricule, Validators.required],
      });
    }
  }

  addNewSalarie(): void {
    if (!this.form.valid) {
      this.shouldDisplayErrorMessage = true;
      this.errorMessage = 'Vous devez remplir tous les champs';
    } else {
      this.shouldDisplayErrorMessage = false;

      const firstName = this.form.get('firstName').value;
      const lastName = this.form.get('lastName').value;
      const email = this.form.get('email').value;
      const phone = this.form.get('phone_number').value;
      const matricule = this.form.get('matricule').value;

      const salarie: Salarie = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        matricule: matricule,
      };
      ObjectUtility.storeSalaries(salarie, this.shouldBeEdited);
      this.successMessage = 'La période a bien été créée';
      this.shouldDisplaySuccessMessage = true;
      this.router.navigate(['salaries']);
    }
  }
}
