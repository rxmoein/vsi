import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTaxModalComponent } from './change-tax-modal.component';

describe('ChangeTaxModalComponent', () => {
  let component: ChangeTaxModalComponent;
  let fixture: ComponentFixture<ChangeTaxModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeTaxModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeTaxModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
