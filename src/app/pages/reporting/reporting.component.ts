import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from '../../services/email.service';
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
  totalFichesPaies: number;

  constructor(private router: Router, private emailService: EmailService) {}

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
      let r: Report = JSON.parse(report);
      const fiches = ObjectUtility.getFichesPaie(r.code);
      r.totalReportLoaded = 0;
      if (fiches) {
        r.totalReportLoaded = ObjectUtility.getFichesPaie(r.code).length;
      }

      this.reports.push(r);
    });
  }

  public getTotalFichesPaie(): number {
    return this.reports.length;
  }

  public sendEmail(report: Report) {
    const data = ObjectUtility.getFichesPaie(report.code);

    if (data) {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        let item = JSON.parse(data[i]);
        this.emailService
          .send(
            JSON.parse(localStorage.getItem('SMTP')),
            item.path,
            item.name,
            '154',
            'williamsko89@gmail.com',
          )
          .subscribe(
            (data) => {
              console.log(data);
            },
            (err) => console.log(err)
          );
      }
    }
  }
}
