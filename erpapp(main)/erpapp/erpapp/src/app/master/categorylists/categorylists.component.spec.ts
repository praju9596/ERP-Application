import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorylistsComponent } from './categorylists.component';

describe('CategorylistsComponent', () => {
  let component: CategorylistsComponent;
  let fixture: ComponentFixture<CategorylistsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorylistsComponent]
    });
    fixture = TestBed.createComponent(CategorylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
