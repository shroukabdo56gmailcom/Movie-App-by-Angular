import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  peopleList:any[]=[]
  imgPath:String='https://image.tmdb.org/t/p/original'
  constructor(private _tranding: TrendingService) {}
  getTrandingperson() {
    this._tranding.getdata('person').subscribe((data) => {
      this.peopleList=data.results
    });
  }

  ngOnInit(): void {
    this.getTrandingperson()
  }

}
