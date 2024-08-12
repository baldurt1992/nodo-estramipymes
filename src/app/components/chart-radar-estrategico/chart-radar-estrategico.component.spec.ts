import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartRadarEstrategicoComponent } from './chart-radar-estrategico.component';

describe('ChartRadarEstrategicoComponent', () => {
  let component: ChartRadarEstrategicoComponent;
  let fixture: ComponentFixture<ChartRadarEstrategicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartRadarEstrategicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartRadarEstrategicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
