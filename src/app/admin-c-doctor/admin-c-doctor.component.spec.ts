import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCDoctorComponent } from './admin-c-doctor.component';

describe('AdminCDoctorComponent', () => {
  let component: AdminCDoctorComponent;
  let fixture: ComponentFixture<AdminCDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
