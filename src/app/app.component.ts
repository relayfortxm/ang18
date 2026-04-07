import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<h1>Welcome to Angular!</h1><p>Running Angular v{{ version }}</p>`,
})
export class AppComponent {
  version = VERSION.full;
}
