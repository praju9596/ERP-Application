import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierupdateComponent } from './supplierupdate.component';

describe('SupplierupdateComponent', () => {
  let component: SupplierupdateComponent;
  let fixture: ComponentFixture<SupplierupdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplierupdateComponent]
    });
    fixture = TestBed.createComponent(SupplierupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
