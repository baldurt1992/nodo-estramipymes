import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveredPasswordComponent } from './recovered-password.component';

describe('RecoveredPasswordComponent', () => {
  let component: RecoveredPasswordComponent;
  let fixture: ComponentFixture<RecoveredPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecoveredPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecoveredPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
