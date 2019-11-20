import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppBrowserModule } from 'app/app.browser.module';

if (environment.production) {
  enableProdMode();
}
// not sure needed
platformBrowserDynamic().bootstrapModule(AppBrowserModule)
  .then(() => {
    console.log('LOADED');
    document.getElementById('preview-area').remove();
  })
  .catch(err => console.log(err));

