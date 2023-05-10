import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  Tmovies: any[] = [];
  imgPath:String='https://image.tmdb.org/t/p/original'
  constructor(private _tranding: TrendingService) {}
  getTrandingMovies() {
    this._tranding.getdata('movie').subscribe((data) => {
      console.log(data.results);
      
      this.Tmovies = data.results;
    });
  }
  ngOnInit(): void {
    this.getTrandingMovies()    
  }

}
