import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PBookComponent } from './p-book.component';

describe('PBookComponent', () => {
  let component: PBookComponent;
  let fixture: ComponentFixture<PBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
