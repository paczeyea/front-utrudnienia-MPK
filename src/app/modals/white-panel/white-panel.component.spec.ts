import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitePanelComponent } from './white-panel.component';

describe('WhitePanelComponent', () => {
  let component: WhitePanelComponent;
  let fixture: ComponentFixture<WhitePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhitePanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhitePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
