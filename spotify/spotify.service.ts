import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as _ from "lodash";

@Injectable()
export class SpotifyService {

  constructor(private http: Http) { }
  getArtists(name):Observable<any>{
    name = encodeURIComponent(name);
    return this.http
               .get(`https://api.spotify.com/v1/search?type=artist&q=${name}`)
               .map((res: Response) => {
                 return _.map(res.json().artists.items,
                       _.partialRight(_.pick,
                       ['external_urls', 'images[0].url', 'id', 'name', 'popularity', 'followers.total']));;
               }).catch(this.handleError);
  }
  public handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}