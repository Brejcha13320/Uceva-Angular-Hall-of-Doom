import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-of-doom',
  imports: [CommonModule],
  template: `
  <div class="section-title">registro de candidatos a reprobar</div>
  <div class="doom-list" id="doomList">
    @for(s of students; track $index; let i = $index){
      <div 
        class="doom-card"
        [style.animationDelay]="(i * 0.08) + 's'">

        <span class="doom-rank">
          #{{ i + 1 }}
        </span>

        <div class="doom-avatar">
          {{ s.init }}
        </div>

        <div class="doom-info">

          <div class="doom-name">
            {{ s.name }}
          </div>

          <div class="doom-reason">
            {{ s.reason }}
          </div>

        </div>

        <span class="doom-score">
          {{ s.score }} / 5.0
        </span>

      </div>
    }
  </div>
  `,
})
export class ListOfDoom {

  students = [
    { name: "Nombre 1", reason: "Diseñó toda la app en el main()", score: "1.2", init: "N1" },
    { name: "Nombre 2", reason: "Su diagrama UML tiene 3 flechas circulares", score: "1.5", init: "N2" },
    { name: "Nombre 3", reason: "Confunde microservicio con micrositio", score: "0.8", init: "N3" },
    { name: "Nombre 4", reason: "Copió la arquitectura de un tutorial de 2010", score: "1.0", init: "N4" },
    { name: "Nombre 5", reason: "Su base de datos es un Google Sheets", score: "0.5", init: "N5" },
  ];

  // const list = document.getElementById('doomList');
  // students.forEach((s, i) => {
  //   const card = document.createElement('div');
  //   card.className = 'doom-card';
  //   card.style.animationDelay = (i * .08) + 's';
  //   card.innerHTML = `
  //     <span class="doom-rank">#${i+1}</span>
  //     <div class="doom-avatar">${s.init}</div>
  //     <div class="doom-info">
  //       <div class="doom-name">${s.name}</div>
  //       <div class="doom-reason">${s.reason}</div>
  //     </div>
  //     <span class="doom-score">${s.score} / 5.0</span>
  //   `;
  //   list.appendChild(card);
  // });

}
