import { Component } from '@angular/core';

@Component({
  selector: 'app-diagram',
  imports: [],
  template: `
  <div style="margin-bottom:.6rem">
    <div class="section-title">estado actual de la arquitectura</div>
  </div>
  <div class="arch-diagram">
      <div class="arch-col">
          <div class="arch-box">Cliente</div>
      </div>
      <span class="arch-arrow">→</span>
      <div class="arch-col">
          <div class="arch-box dead">Monolito</div>
          <div class="arch-label">todo en un archivo .java</div>
      </div>
      <span class="arch-arrow">→</span>
      <div class="arch-col">
          <div class="arch-box dead">¿Base de datos?</div>
          <div class="arch-label">ArrayList en memoria</div>
      </div>
      <span class="arch-arrow">→</span>
      <div class="arch-col">
          <div class="arch-box dead">Respuesta</div>
          <div class="arch-label">NullPointerException</div>
      </div>
  </div>
  `,
})
export class Diagram {

}
