import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ObjectUtility } from '../shared/utils/object.utility';

@Injectable({
  providedIn: 'root',
})
export class ParamSmtpService {
  apiURL = 'http://127.0.0.1:8000/api/v1/smtp/create/';

  constructor(private http: HttpClient) {}

  public createParamSMTP(
    identifiant: string,
    password: string,
    domain: string,
    port: number
  ): void {
    const data = JSON.stringify({
      identifiant: identifiant,
      password: password,
      domain: domain,
      port: port,
    });

    ObjectUtility.storeParamSMTP(data);
  }
}
