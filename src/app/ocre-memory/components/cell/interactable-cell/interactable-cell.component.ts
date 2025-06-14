import {Component, computed, HostBinding, input, signal} from '@angular/core';
import {Button} from "primeng/button";
import {Popover} from "primeng/popover";
import {CellContent} from '../../../models/cell-content';
import {CellCoordinates} from '../../../models/cell-coordinates';
import {SpecialCellDisplay} from "../../../models/special-cell-display";

@Component({
  selector: 'app-interactable-cell',
  imports: [
    Popover,
    Button
  ],
  templateUrl: './interactable-cell.component.html',
  styleUrl: './interactable-cell.component.css'
})
export class InteractableCellComponent {

  coordinates = input.required<CellCoordinates>();
  content = signal<CellContent>(CellContent.NOTHING);

  @HostBinding('class.dark') get isDark() {
    return (this.coordinates().x + this.coordinates().y) % 2 === 0;
  }

  @HostBinding('class.unknown') get isUnknown() {
    return this.content() === CellContent.UNKNOWN;
  }

  @HostBinding('class.cleared') get isCleared() {
    return this.content() === CellContent.CLEARED;
  }

  @HostBinding('class.mob') get hasMob() {
    return this.content() === CellContent.MALBOIS || this.content() === CellContent.MALZERB || this.content() === CellContent.MALEPIK
      || this.content() === CellContent.MALTRIO;
  }

  setContent(content: CellContent) {
    this.content.set(content);
    console.log(JSON.stringify(this.coordinates()));
  }


  specialDisplay = computed(() => {
    const coordinates = this.coordinates();
    if (eyesCoords.findIndex(elt => elt.x === coordinates.x && elt.y === coordinates.y) >= 0) {
      return SpecialCellDisplay.Eye;
    }
    if(crossCoords.findIndex(elt => elt.x === coordinates.x && elt.y === coordinates.y) >= 0) {
      return SpecialCellDisplay.Cross;
    }
    return SpecialCellDisplay.None;
  })


  protected readonly CellContent = CellContent;
  protected readonly SpecialCellDisplay = SpecialCellDisplay;
}





const eyesCoords = [
  { x: 9, y: 7 },
  { x: 11, y: 8 },
  { x: 11, y: 11 },
  { x: 7, y: 8 },
  { x: 7, y: 11 },
]

const crossCoords = [
  { x: 1, y: 2 },
  { x: 3, y: 0 },
  { x: 6, y: 2 },
  { x: 12, y: 3 },
  { x: 16, y: 3 },
  { x: 16, y: 7 },
  { x: 17, y: 14 },
  { x: 16, y: 17 },
  { x: 5, y: 15 },
  { x: 3, y: 16 },
  { x: 3, y: 11 },
  { x: 0, y: 12 }
]
