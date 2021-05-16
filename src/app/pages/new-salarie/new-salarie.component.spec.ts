import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSalarieComponent } from './new-salarie.component';

describe('NewSalarieComponent', () => {
  let component: NewSalarieComponent;
  let fixture: ComponentFixture<NewSalarieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSalarieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSalarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
