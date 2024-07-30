import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSumaryComponent } from './form-sumary.component';

describe('FormSumaryComponent', () => {
  let component: FormSumaryComponent;
  let fixture: ComponentFixture<FormSumaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSumaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSumaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
