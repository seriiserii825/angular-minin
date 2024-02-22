import {Component, inject} from '@angular/core';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {CommonModule} from '@angular/common';
import {Ihosinglocation} from '../../interfaces/ihosinglocation';
import {HousingService} from '../../services/housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  housing_location_list: Ihosinglocation[] = [];
  housingService: HousingService = inject(HousingService);
  filtered_location_list: Ihosinglocation[] = [];
  constructor() {
    this.housingService.getAllHousingLocations().then((housing_location_list: Ihosinglocation[]) => {
      this.housing_location_list = housing_location_list;
      this.filtered_location_list = this.housing_location_list;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filtered_location_list = this.housing_location_list;
      return;
    }

    this.filtered_location_list = this.housing_location_list.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
