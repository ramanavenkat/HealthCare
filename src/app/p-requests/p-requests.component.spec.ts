import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PRequestsComponent } from './p-requests.component';

describe('PRequestsComponent', () => {
  let component: PRequestsComponent;
  let fixture: ComponentFixture<PRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
