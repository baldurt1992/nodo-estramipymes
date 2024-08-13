import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartVrioComponent } from './chart-vrio.component';

describe('ChartVrioComponent', () => {
  let component: ChartVrioComponent;
  let fixture: ComponentFixture<ChartVrioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartVrioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartVrioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
