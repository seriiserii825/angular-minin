import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {MenuComponent} from './components/menu/menu.component';
import {HeroesComponent} from './components/heroes/heroes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterLink, MenuComponent, HeroesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-minin';
}
