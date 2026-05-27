import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  template: `
  <div class="hero">
    <span class="hero-icon">☠️</span>
    <div class="tag">Arquitectura de Software · Semestre en curso</div>
    <h1>Hall of <span class="accent">Doom</span></h1>
    <p class="subtitle">
        Este servidor es testigo de las mejores intenciones y los peores diagramas
        de la historia del departamento. Los siguientes estudiantes han sido
        identificados como <em>candidatos a repetir el semestre</em>.
    </p>

    <div class="danger-bar">
        <span class="blink"></span>
        ALERTA DE SISTEMA — Cohesión baja detectada · Acoplamiento fuera de rango · UML no encontrado
    </div>
  </div>
  `,
})
export class Hero { }
