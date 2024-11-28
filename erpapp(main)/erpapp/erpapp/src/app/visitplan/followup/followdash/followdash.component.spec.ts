import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowdashComponent } from './followdash.component';

describe('FollowdashComponent', () => {
  let component: FollowdashComponent;
  let fixture: ComponentFixture<FollowdashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FollowdashComponent]
    });
    fixture = TestBed.createComponent(FollowdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
