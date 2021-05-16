import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReportingComponent } from './new-reporting.component';

describe('NewReportingComponent', () => {
  let component: NewReportingComponent;
  let fixture: ComponentFixture<NewReportingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewReportingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
