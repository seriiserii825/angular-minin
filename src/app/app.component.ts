import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import {HomeComponent} from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-minin';
}
