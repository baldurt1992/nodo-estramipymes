import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteFormBtnComponent } from './complete-form-btn.component';

describe('CompleteFormBtnComponent', () => {
  let component: CompleteFormBtnComponent;
  let fixture: ComponentFixture<CompleteFormBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompleteFormBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteFormBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
