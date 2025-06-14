import {Component} from '@angular/core';
import {CellComponent} from './components/cell/cell.component';
import {fightMap} from './models/fight-map';

@Component({
  selector: 'app-ocre-memory',
  imports: [
    CellComponent
  ],
  templateUrl: './ocre-memory.component.html',
  styleUrl: './ocre-memory.component.css'
})
export class OcreMemoryComponent {
   memoryMap = fightMap;
}
