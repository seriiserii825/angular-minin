import {Component, Input} from '@angular/core';
import {Ihero} from '../../interfaces/ihero';
import {NgIf, UpperCasePipe} from '@angular/common';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [UpperCasePipe, NgIf, NgModel],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss'
})
export class HeroDetailComponent {
  @Input() hero?: Ihero;
}
