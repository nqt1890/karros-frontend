import { Component, OnInit } from '@angular/core';
import { GenreService } from './services/genre.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'karros-frontend';

  constructor(private genreService: GenreService) { }

  genres = {};

  ngOnInit(): void {
    this.genreService.getGenre()
      .subscribe(data => {
        data.genres.forEach(item => {
          this.genres[item.id] = item.name;
        });
      });
  } 
}


