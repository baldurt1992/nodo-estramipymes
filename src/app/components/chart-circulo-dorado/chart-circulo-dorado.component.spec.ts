import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCirculoDoradoComponent } from './chart-circulo-dorado.component';

describe('ChartCirculoDoradoComponent', () => {
  let component: ChartCirculoDoradoComponent;
  let fixture: ComponentFixture<ChartCirculoDoradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartCirculoDoradoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartCirculoDoradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
