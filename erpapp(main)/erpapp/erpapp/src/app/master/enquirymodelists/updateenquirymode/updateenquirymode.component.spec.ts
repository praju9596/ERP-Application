import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateenquirymodeComponent } from './updateenquirymode.component';

describe('UpdateenquirymodeComponent', () => {
  let component: UpdateenquirymodeComponent;
  let fixture: ComponentFixture<UpdateenquirymodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateenquirymodeComponent]
    });
    fixture = TestBed.createComponent(UpdateenquirymodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
