import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallCellComponent } from './wall-cell.component';

describe('WallCellComponent', () => {
  let component: WallCellComponent;
  let fixture: ComponentFixture<WallCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WallCellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WallCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
