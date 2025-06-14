import {Component, HostBinding, input, signal} from '@angular/core';
import {Button} from "primeng/button";
import {Popover} from "primeng/popover";
import {CellContent} from '../../../models/cell-content';
import {CellCoordinates} from '../../../models/cell-coordinates';

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
  }


  protected readonly CellContent = CellContent;
}
