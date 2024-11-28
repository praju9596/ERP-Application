import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddenquiryComponent } from './addenquiry.component';

describe('AddenquiryComponent', () => {
  let component: AddenquiryComponent;
  let fixture: ComponentFixture<AddenquiryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddenquiryComponent]
    });
    fixture = TestBed.createComponent(AddenquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
