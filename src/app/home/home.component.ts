import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private _tranding: TrendingService) {}

  ngOnInit(): void {}
}
