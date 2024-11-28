import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquirymodelistsComponent } from './enquirymodelists.component';

describe('EnquirymodelistsComponent', () => {
  let component: EnquirymodelistsComponent;
  let fixture: ComponentFixture<EnquirymodelistsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnquirymodelistsComponent]
    });
    fixture = TestBed.createComponent(EnquirymodelistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
