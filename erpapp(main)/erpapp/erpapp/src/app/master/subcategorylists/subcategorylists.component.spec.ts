import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategorylistsComponent } from './subcategorylists.component';

describe('SubcategorylistsComponent', () => {
  let component: SubcategorylistsComponent;
  let fixture: ComponentFixture<SubcategorylistsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubcategorylistsComponent]
    });
    fixture = TestBed.createComponent(SubcategorylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
