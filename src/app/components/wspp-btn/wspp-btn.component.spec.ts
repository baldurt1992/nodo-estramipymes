import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WsppBtnComponent } from './wspp-btn.component';

describe('WsppBtnComponent', () => {
  let component: WsppBtnComponent;
  let fixture: ComponentFixture<WsppBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WsppBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WsppBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
