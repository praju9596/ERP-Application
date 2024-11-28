import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatuslistsComponent } from './statuslists.component';

describe('StatuslistsComponent', () => {
  let component: StatuslistsComponent;
  let fixture: ComponentFixture<StatuslistsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatuslistsComponent]
    });
    fixture = TestBed.createComponent(StatuslistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
