import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiURL = 'http://127.0.0.1:8000/api/v1/agent/login/';

  constructor(private http: HttpClient) {}

  public login(iusername: string, ipassword: string): any {
    console.log(iusername);
    console.log(ipassword);

    // if (iusername === 'w' && ipassword === '&&11&&11') {
    return {
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
    //  }
  }
}
