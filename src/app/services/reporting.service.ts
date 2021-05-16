import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReportingService {
  constructor(private http: HttpClient) {}

  public createReportingPreriod(
    startDate: string,
    endDate: string,
    code_entreprise: string
  ): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    const apiURL = 'http://127.0.0.1:8000/api/v1/reporting/create/';
    const url = apiURL.replace('http://localhost:4200/', '');
    return this.http.post(
      url,
      JSON.stringify({
        start_date: startDate,
        end_date: endDate,
        code_entreprise: code_entreprise,
      }),
      httpOptions
    );
  }

  public getReportingReport(entreprise_code: string): Observable<any> {
    const apiURL =
      'http://127.0.0.1:8000/api/v1/reporting/?format=json&entreprise__code=' +
      entreprise_code;
    const url = apiURL.replace('http://localhost:4200/', '');
    return this.http.get(url);
  }
}
