import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddenquirymodeComponent } from './addenquirymode.component';

describe('AddenquirymodeComponent', () => {
  let component: AddenquirymodeComponent;
  let fixture: ComponentFixture<AddenquirymodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddenquirymodeComponent]
    });
    fixture = TestBed.createComponent(AddenquirymodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
