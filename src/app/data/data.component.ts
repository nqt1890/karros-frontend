import { Component, OnInit, Input } from '@angular/core';
import { DataService } from './../services/data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
    constructor(private dataService: DataService) { }
    @Input() type;
    @Input() genres;

    page = 1;
    maxPage = 0;
    movieGroups = [];

    imageUrl(src) {
        return "https://image.tmdb.org/t/p/w500/" + src;
    }

    makeMovieGroup(list) {
        let subList = [];

        let i = 0;
        for (i = 0; i < list.length; i++) {
            subList.push(list[i]);
            if (subList.length == 4) {
                this.movieGroups.push(subList);
                subList = [];
            }
        }
    }

    getMovieGenres(ids) {
        let genreStr = "";
        ids.forEach(id => {
            if (genreStr == "") {
                genreStr += this.genres[id];
            }
            else {
                genreStr += ", " + this.genres[id];
            }
        });
        return genreStr;
    }

    handleScrollEvent() { 
        if (this.maxPage == 0 || this.page < this.maxPage) {
            if ((window.innerHeight + window.scrollY + 280) >= document.body.offsetHeight ) {
                this.page += 1;
                this.dataService.getData(this.type, this.page)
                .subscribe(data => {
                    this.makeMovieGroup(data.results);
                });
            }
        } 
    }

    ngOnInit(): void {
        this.dataService.getData(this.type, this.page)
            .subscribe(data => {
                this.makeMovieGroup(data.results);
                this.maxPage = data.total_pages
            });
    }
}
