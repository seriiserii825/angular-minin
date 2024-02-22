import {Component} from '@angular/core';
import {Ihero} from '../../interfaces/ihero';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {
  hero: Ihero = {
    id: 1,
    name: 'Windstorm'
  };
}
