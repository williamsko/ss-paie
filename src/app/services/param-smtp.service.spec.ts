import { TestBed } from '@angular/core/testing';

import { ParamSmtpService } from './param-smtp.service';

describe('ParamSmtpService', () => {
  let service: ParamSmtpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParamSmtpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
