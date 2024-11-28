import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryupdateComponent } from './enquiryupdate.component';

describe('EnquiryupdateComponent', () => {
  let component: EnquiryupdateComponent;
  let fixture: ComponentFixture<EnquiryupdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnquiryupdateComponent]
    });
    fixture = TestBed.createComponent(EnquiryupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
