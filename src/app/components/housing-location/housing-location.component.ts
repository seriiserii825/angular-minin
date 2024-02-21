import {CommonModule} from '@angular/common';
import { Component, Input } from '@angular/core';
import {Ihosinglocation} from '../../interfaces/ihosinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.scss'
})
export class HousingLocationComponent {
 @Input() housing_location!: Ihosinglocation;
}
