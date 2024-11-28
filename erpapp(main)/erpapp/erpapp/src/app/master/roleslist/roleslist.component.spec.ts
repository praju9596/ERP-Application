import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleslistComponent } from './roleslist.component';

describe('RoleslistComponent', () => {
  let component: RoleslistComponent;
  let fixture: ComponentFixture<RoleslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoleslistComponent]
    });
    fixture = TestBed.createComponent(RoleslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
