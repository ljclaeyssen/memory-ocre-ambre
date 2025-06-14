import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import { provideRouter } from '@angular/router';
import {definePreset} from "@primeng/themes";
import {providePrimeNG} from "primeng/config";
import Aura from '@primeng/themes/aura';

import { routes } from './app.routes';



const preset = definePreset(Aura, {
  primitive: {
    test: {
      500: '#334155',
    },
  },
  semantic: {
    primary: {
      500: '{test.500}',
    },
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: preset
      }
    })
  ]
};





