import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinBusComponent } from './pin-bus.component';

describe('PinBusComponent', () => {
  let component: PinBusComponent;
  let fixture: ComponentFixture<PinBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PinBusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PinBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
