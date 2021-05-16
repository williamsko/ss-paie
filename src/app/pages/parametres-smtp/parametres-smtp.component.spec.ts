import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametresSmtpComponent } from './parametres-smtp.component';

describe('ParametresSmtpComponent', () => {
  let component: ParametresSmtpComponent;
  let fixture: ComponentFixture<ParametresSmtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametresSmtpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametresSmtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
