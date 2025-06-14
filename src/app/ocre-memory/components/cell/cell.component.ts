import {Component, computed, input} from '@angular/core';
import {CellCoordinates} from '../../models/cell-coordinates';
import {CellState} from '../../models/cell-state';
import {InteractableCellComponent} from './interactable-cell/interactable-cell.component';
import {VoidCellComponent} from './void-cell/void-cell.component';
import {WallCellComponent} from './wall-cell/wall-cell.component';

@Component({
  selector: 'app-cell',
  imports: [
    InteractableCellComponent,
    WallCellComponent,
    VoidCellComponent
  ],
  templateUrl: './cell.component.html',
  styleUrl: './cell.component.css'
})
export class CellComponent {
  cellState = input.required<CellState>()
  coordinates = input.required<CellCoordinates>();
  protected readonly CellState = CellState;
}
