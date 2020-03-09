import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

    <div class="container" id="container">
        <div class="card text-center w-100 h-100" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title" style="background-color: #e6f1ec; padding: 20px;">Best Internet Icon Shop</h5>
                <router-outlet></router-outlet>
            </div>
        </div>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'eshop';
}
