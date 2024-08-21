import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    importProvidersFrom([
      BrowserAnimationsModule,
      // IonicModule.forRoot(),
      // FormlyModule.forRoot(),
      // FormlyPrimeNGModule,
      HttpClientModule,
    ]),
  ],
};
