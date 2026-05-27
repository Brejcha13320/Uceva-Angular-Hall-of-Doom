import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-code-bg',
  imports: [CommonModule],
  template: `
  <div class="code-bg" id="codebg">
    @for (line of lines; track $index) {
      <div
        class="code-line"
        [style.left]="line.left"
        [style.animation-duration]="line.duration"
        [style.animation-delay]="line.delay"
        [style.font-size]="line.fontSize">
        {{ line.text }}
      </div>
    }
  </div>  
  `,
})
export class CodeBg {
  lines = this.generateLines();

  generateLines() {
    const snippets: string[] = [
      'public class Todo extends Object {',
      '  // TODO: arreglar esto después',
      '  static int contador = 0;',
      '  void hacerTodo() {',
      '    // aquí va la lógica',
      '  }',
      '}',
      'SELECT * FROM usuarios;',
      'git commit -m "cambios"',
      'catch(Exception e) { }',
      'new God().doEverything();',
      'extends AbstractFactoryBean',
      '// no tocar, funciona de milagro',
      'implements Serializable, Runnable,',
      'ArrayList<Object> lista = new ArrayList<>();',
      'System.out.println("hola mundo");',
      'git push origin main --force',
      'DROP TABLE IF EXISTS notas;',
      '// diseño: monolito monumental',
      'return null; // fix later',
    ];

    return Array.from({ length: 18 }, () => ({
      text: snippets[Math.floor(Math.random() * snippets.length)],
      left: `${Math.random() * 100}%`,
      duration: `${Math.random() * 18 + 10}s`,
      delay: `${Math.random() * 15}s`,
      fontSize: Math.random() > 0.5 ? '10px' : '12px',
    }));
  }

}
