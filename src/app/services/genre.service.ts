import { Injectable } from '@angular/core';
import { Movie } from './../models/movie';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
    constructor(private http: HttpClient) { }

    url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=a7b3c9975791294647265c71224a88ad&language=en-US';

    getGenre(): any {
    return this.http.get<any>(this.url).pipe();
  }
}
