import { Component } from '@angular/core';
import { CodeBg } from './components/code-bg/code-bg';
import { Diagram } from './components/diagram/diagram';
import { Footer } from './components/footer/footer';
import { Hero } from './components/hero/hero';
import { ListOfDoom } from './components/list-of-doom/list-of-doom';
import { Metrics } from './components/metrics/metrics';
import { Quote } from './components/quote/quote';

@Component({
  selector: 'app-root',
  imports: [
    CodeBg,
    Hero,
    Diagram,
    ListOfDoom,
    Metrics,
    Quote,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
