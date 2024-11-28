import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbusinessComponent } from './addbusiness.component';

describe('AddbusinessComponent', () => {
  let component: AddbusinessComponent;
  let fixture: ComponentFixture<AddbusinessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddbusinessComponent]
    });
    fixture = TestBed.createComponent(AddbusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
