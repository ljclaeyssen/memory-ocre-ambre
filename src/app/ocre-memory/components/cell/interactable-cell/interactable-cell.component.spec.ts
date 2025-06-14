import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractableCellComponent } from './interactable-cell.component';

describe('InteractableCellComponent', () => {
  let component: InteractableCellComponent;
  let fixture: ComponentFixture<InteractableCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractableCellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractableCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
