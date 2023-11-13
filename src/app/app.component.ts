import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { DetailsMoviesComponent } from './details-movies/details-movies.component';
import { DetailsReviewsComponent } from './details-reviews/details-reviews.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { SearchComponent } from './search/search.component';
import { LoaderComponent } from './loader/loader.component';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, HomeComponent, DetailsComponent, DetailsMoviesComponent, DetailsReviewsComponent, NotAuthorizedComponent, SearchComponent, LoaderComponent, ModalComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies-app';
}
