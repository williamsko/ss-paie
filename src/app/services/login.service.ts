import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ObjectUtility } from '../shared/utils/object.utility';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiURL = 'http://127.0.0.1:8000/api/v1/agent/login/';

  constructor(private http: HttpClient) {}

  public login(iusername: string, ipassword: string): any {
    console.log(iusername);
    console.log(ipassword);

    console.log('ACCOUNT', localStorage.getItem('ACCOUNT'));
    var credentials = localStorage.getItem('ACCOUNT').split('/');
    var admin_credentials = localStorage.getItem('ADMIN').split('/');

    let isAdmin =
      iusername === admin_credentials[0] && ipassword === admin_credentials[1];

    if (
      (iusername === credentials[0] && ipassword === credentials[1]) ||
      (iusername === admin_credentials[0] && ipassword === admin_credentials[1])
    ) {
      return {
        isAdmin: isAdmin,
        address: 'TEST',
        code: 'TEST',
        firstName: 'TEST',
        lastName: 'TEST',
        phoneNumber: 'TEST',
        entreprise: {
          address: 'TEST',
          code: 'TEST',
          phoneNumber: 'TEST',
          email: 'TEST',
          brandName: 'TEST',
        },
      };
    }
  }
}
