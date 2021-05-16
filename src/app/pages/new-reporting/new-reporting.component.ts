import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Report } from '../../shared/models/report';
import { ObjectUtility } from '../../shared/utils/object.utility';
import { Utils } from '../../shared/utils/utils';
import * as moment from 'moment';

@Component({
  selector: 'app-new-reporting',
  templateUrl: './new-reporting.component.html',
  styleUrls: ['./new-reporting.component.scss'],
})
export class NewReportingComponent implements OnInit {
  form: FormGroup;
  agent: any;
  errorMessage: string;
  successMessage: string;
  shouldDisplayErrorMessage = false;
  shouldDisplaySuccessMessage = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.agent = JSON.parse(localStorage.getItem('AGENT'));
    this.form = this.createFormGroup();
    
  }

  private createFormGroup(): FormGroup {
    return this.formBuilder.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }

  public addReportingPeriod(): void {
    if (!this.form.valid) {
      this.shouldDisplayErrorMessage = true;
      this.errorMessage = 'Vous devez remplir tous les champs';
    } else {
      this.shouldDisplayErrorMessage = false;
      const startDate = this.form.get('startDate').value;
      const endDate = this.form.get('endDate').value;
      this.callAddReportingAPI(startDate, endDate);
    }
  }

  private callAddReportingAPI(startDate, endDate): void {
    let now = moment();
    console.log(typeof startDate);

    const reporting: Report = {
      code: Utils.generateUniqueCode(),
      startDate: moment(
        startDate.month + '-' + startDate.day + '-' + startDate.year,
        'MM-DD-YYYY'
      ).toDate(),
      endDate: moment(
        endDate.month + '-' + endDate.day + '-' + endDate.year,
        'MM-DD-YYYY'
      ).toDate(),
      dateCreation: now.toDate(),
    };
    console.log('reporting', reporting);
    ObjectUtility.storeReportingInformation(reporting);
    this.successMessage = 'La période a bien été créée';
    this.shouldDisplaySuccessMessage = true;
  }
}
