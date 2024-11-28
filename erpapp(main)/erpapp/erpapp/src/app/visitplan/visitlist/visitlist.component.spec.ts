import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitlistComponent } from './visitlist.component';

describe('VisitlistComponent', () => {
  let component: VisitlistComponent;
  let fixture: ComponentFixture<VisitlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisitlistComponent]
    });
    fixture = TestBed.createComponent(VisitlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
