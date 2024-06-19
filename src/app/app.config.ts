import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { FocusDirective } from './helpers/directives/focus.directive';
import { AutoTabDirective } from './helpers/directives/auto-tab.directive';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(FocusDirective, AutoTabDirective),
  ],
};
