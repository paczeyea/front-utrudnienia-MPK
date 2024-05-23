import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocDialogComponent } from './loc-dialog.component';

describe('LocDialogComponent', () => {
  let component: LocDialogComponent;
  let fixture: ComponentFixture<LocDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
