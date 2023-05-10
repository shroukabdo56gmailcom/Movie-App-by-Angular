import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrendingService } from '../trending.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  dId: any;
  dMt: any;
  myMovieDetails: any = {};
  imgPath: String = 'https://image.tmdb.org/t/p/original';
  constructor(private tredning: TrendingService, activeRouts: ActivatedRoute) {
    this.dId = activeRouts.snapshot.params['id'];
    this.dMt = activeRouts.snapshot.params['mt'];
    console.log(this.dId, this.dMt);
  }

  getGenraDetails() {
    this.tredning.getDetails(this.dId, this.dMt).subscribe(async (res) => {
      console.log(res);
      this.myMovieDetails = await res;
    });
  }
  objectKeys(obj: {}) {
    return Object.keys(obj);
  }
  ngOnInit(): void {
    if (!this.myMovieDetails) {
      return;
    }
    this.getGenraDetails();
    // throw new Error('Method not implemented.');
  }
}
