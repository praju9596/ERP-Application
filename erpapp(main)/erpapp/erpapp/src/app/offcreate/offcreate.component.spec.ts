import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffcreateComponent } from './offcreate.component';

describe('OffcreateComponent', () => {
  let component: OffcreateComponent;
  let fixture: ComponentFixture<OffcreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffcreateComponent]
    });
    fixture = TestBed.createComponent(OffcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
