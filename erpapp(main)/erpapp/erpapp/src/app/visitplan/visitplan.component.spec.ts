import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitplanComponent } from './visitplan.component';

describe('VisitplanComponent', () => {
  let component: VisitplanComponent;
  let fixture: ComponentFixture<VisitplanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisitplanComponent]
    });
    fixture = TestBed.createComponent(VisitplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
