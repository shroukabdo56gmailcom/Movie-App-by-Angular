import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TvshowsComponent implements OnInit {
  tvShows:any[]=[];
  imgPath:String='https://image.tmdb.org/t/p/original'
  constructor(private _tranding: TrendingService) {}
  getTrandingtv() {
    this._tranding.getdata('tv').subscribe((data) => {
     this.tvShows=data.results;
    });
  }
  ngOnInit(): void {
    this.getTrandingtv()
  }

}
