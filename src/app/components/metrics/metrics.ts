import { Component } from '@angular/core';

@Component({
  selector: 'app-metrics',
  imports: [],
  template: `
  <div class="section-title">métricas de daño colateral</div>
  <div class="metrics">
    <div class="metric-card">
      <span class="metric-val">0</span>
      <div class="metric-lbl">Patrones de diseño aplicados</div>
    </div>
    <div class="metric-card">
      <span class="metric-val">∞</span>
      <div class="metric-lbl">Clases God object encontradas</div>
    </div>
    <div class="metric-card">
      <span class="metric-val">404</span>
      <div class="metric-lbl">Documentación no encontrada</div>
    </div>
    <div class="metric-card">
      <span class="metric-val">100%</span>
      <div class="metric-lbl">Acoplamiento entre módulos</div>
    </div>
  </div>
  `,
})
export class Metrics {

}
