import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessFormComponent } from './bussiness-form.component';

describe('BussinessFormComponent', () => {
  let component: BussinessFormComponent;
  let fixture: ComponentFixture<BussinessFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BussinessFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BussinessFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
