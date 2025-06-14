import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoidCellComponent } from './void-cell.component';

describe('VoidCellComponent', () => {
  let component: VoidCellComponent;
  let fixture: ComponentFixture<VoidCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoidCellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoidCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
