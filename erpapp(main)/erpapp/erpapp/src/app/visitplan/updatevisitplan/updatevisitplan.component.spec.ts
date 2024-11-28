import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatevisitplanComponent } from './updatevisitplan.component';

describe('UpdatevisitplanComponent', () => {
  let component: UpdatevisitplanComponent;
  let fixture: ComponentFixture<UpdatevisitplanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatevisitplanComponent]
    });
    fixture = TestBed.createComponent(UpdatevisitplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
