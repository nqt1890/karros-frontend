import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  urls = {
    popular: 'https://api.themoviedb.org/3/movie/popular?api_key=a7b3c9975791294647265c71224a88ad&language=en-US&page=',
    topRated: 'https://api.themoviedb.org/3/movie/top_rated?api_key=a7b3c9975791294647265c71224a88ad&language=en-US&page=',
    upcoming: 'https://api.themoviedb.org/3/movie/upcoming?api_key=a7b3c9975791294647265c71224a88ad&language=en-US&page='
  }

  getData(type, page): any {
    return this.http.get<any>(this.urls[type] + page).pipe();
  }
}
