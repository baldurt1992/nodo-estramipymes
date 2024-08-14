import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartRelojEstrategicoComponent } from './chart-reloj-estrategico.component';

describe('ChartRelojEstrategicoComponent', () => {
  let component: ChartRelojEstrategicoComponent;
  let fixture: ComponentFixture<ChartRelojEstrategicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartRelojEstrategicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartRelojEstrategicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
