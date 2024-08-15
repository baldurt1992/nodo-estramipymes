import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRecoveredPasswordComponent } from './form-recovered-password.component';

describe('FormRecoveredPasswordComponent', () => {
  let component: FormRecoveredPasswordComponent;
  let fixture: ComponentFixture<FormRecoveredPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRecoveredPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRecoveredPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
