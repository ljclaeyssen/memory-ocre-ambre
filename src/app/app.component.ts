import {Component} from '@angular/core';
import {Button} from "primeng/button";
import {Dialog} from "primeng/dialog";
import {InfosComponent} from "./infos/infos.component";
import {OcreMemoryComponent} from "./ocre-memory/ocre-memory.component";

@Component({
    selector: 'app-root',
  imports: [OcreMemoryComponent, Button, Dialog, InfosComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ocre-ambre';

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
