import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignationlistsComponent } from './designationlists.component';

describe('DesignationlistsComponent', () => {
  let component: DesignationlistsComponent;
  let fixture: ComponentFixture<DesignationlistsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesignationlistsComponent]
    });
    fixture = TestBed.createComponent(DesignationlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
