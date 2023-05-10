import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TrendingService {
  constructor(private _http: HttpClient) {}
  getdata(mediatype: any): Observable<any> {
    return this._http.get(`https://api.themoviedb.org/3/trending/${mediatype}/day?api_key=6af4e1eecab52d591c592e8ee13e9e2b`);
  }
  getDetails(id:any,mediatype:any):Observable<any>{
    return this._http.get(`https://api.themoviedb.org/3/${mediatype}/${id}?api_key=6af4e1eecab52d591c592e8ee13e9e2b`)
  }
}
