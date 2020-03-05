import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="mdl-layout__header-row">
        <span class="mdl-layout__title">Best Internet Icon Shop</span>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'eshop';
}
