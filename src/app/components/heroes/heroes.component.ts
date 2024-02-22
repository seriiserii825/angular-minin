import {Component} from '@angular/core';
import {Ihero} from '../../interfaces/ihero';
import {FormsModule} from '@angular/forms';
import {HEROES} from './mock-heroes';
import {NgFor, NgIf} from '@angular/common';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {
  selected_hero: Ihero | undefined;
  heroes: Ihero[] = HEROES;
  onSelect(hero: Ihero): void {
    this.selected_hero = hero;
  }
}
