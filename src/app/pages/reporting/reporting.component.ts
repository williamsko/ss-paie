import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportingService } from '../../services/reporting.service';
import { Report } from '../../shared/models/report';
import { ObjectUtility } from '../../shared/utils/object.utility';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.scss'],
})
export class ReportingComponent implements OnInit {
  agent: any;
  reports: Report[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.agent = JSON.parse(localStorage.getItem('AGENT'));
    this.reports = [];
    this.getReportingReport();
  }

  public editReport(): void {
    this.router.navigate(['/edit-reporting/']);
  }

  private getReportingReport(): void {
    const data = ObjectUtility.getReportingInformation();
    data.forEach((report) => {
      console.log(report);
      this.reports.push(JSON.parse(report));
    });
  }
}
