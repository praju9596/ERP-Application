import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierlistComponent } from './supplierlist.component';

describe('SupplierlistComponent', () => {
  let component: SupplierlistComponent;
  let fixture: ComponentFixture<SupplierlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplierlistComponent]
    });
    fixture = TestBed.createComponent(SupplierlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
