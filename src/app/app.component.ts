import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {Button} from "primeng/button";
import {Toolbar} from "primeng/toolbar";
import {OcreMemoryComponent} from "./ocre-memory/ocre-memory.component";

@Component({
    selector: 'app-root',
  imports: [OcreMemoryComponent, Toolbar, Button, RouterOutlet, RouterLink],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ocre-ambre';
}
