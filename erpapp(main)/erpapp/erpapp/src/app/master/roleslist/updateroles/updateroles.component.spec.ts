import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdaterolesComponent } from './updateroles.component';

describe('UpdaterolesComponent', () => {
  let component: UpdaterolesComponent;
  let fixture: ComponentFixture<UpdaterolesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdaterolesComponent]
    });
    fixture = TestBed.createComponent(UpdaterolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
