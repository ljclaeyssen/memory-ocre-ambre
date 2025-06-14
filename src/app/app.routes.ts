import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'play',
    loadComponent: () => import('./ocre-memory/ocre-memory.component').then(m => m.OcreMemoryComponent)
  },
  {
    path: 'info',
    loadComponent: () => import('./infos/infos.component').then(m => m.InfosComponent)
  },
  {
    path: '**',
    redirectTo: 'play',
  }
];
