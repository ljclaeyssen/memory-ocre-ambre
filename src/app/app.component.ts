import {Component} from '@angular/core';
import {OcreMemoryComponent} from "./ocre-memory/ocre-memory.component";

@Component({
    selector: 'app-root',
  imports: [OcreMemoryComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ocre-ambre';
}
