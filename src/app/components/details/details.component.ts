import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HousingService} from '../../services/housing.service';
import {Ihosinglocation} from '../../interfaces/ihosinglocation';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = -1;
  housingService = inject(HousingService);
  housing_location: Ihosinglocation | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params['id']);
    this.housing_location = this.housingService.getHousingLocationById(this.housingLocationId);
  }
  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
