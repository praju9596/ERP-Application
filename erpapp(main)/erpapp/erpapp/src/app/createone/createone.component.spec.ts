import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateoneComponent } from './createone.component';

describe('CreateoneComponent', () => {
  let component: CreateoneComponent;
  let fixture: ComponentFixture<CreateoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateoneComponent]
    });
    fixture = TestBed.createComponent(CreateoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
