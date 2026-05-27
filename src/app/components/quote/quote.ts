import { Component } from '@angular/core';

@Component({
  selector: 'app-quote',
  imports: [],
  template: `
  <div class="quote-block">
    <p class="quote-text">
      "La arquitectura de software es como la plomería: nadie se preocupa por ella
      hasta que todo está inundado." — y aparentemente tampoco antes del parcial.
    </p>
    <p class="quote-author">— Profe, al revisar el repositorio del grupo</p>
  </div>
  `,
})
export class Quote {

}
