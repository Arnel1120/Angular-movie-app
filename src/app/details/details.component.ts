import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsMoviesComponent } from '../details-movies/details-movies.component';
import { DetailsReviewsComponent } from '../details-reviews/details-reviews.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, DetailsMoviesComponent, DetailsReviewsComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

}
