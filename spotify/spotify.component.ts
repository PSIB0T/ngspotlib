import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
// import {SpotService} from './spot.service';
import {SpotifyService} from './spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css']
})
export class SpotifyComponent implements OnInit{
  title = 'Results';
  artists = [];
  setArtist:boolean = false;
  ggString:string;

  constructor(private spotservice:SpotifyService,private activatedRoute: ActivatedRoute){}
  ngOnInit(){
    this.activatedRoute.queryParams.subscribe((params: Params) => {
        let artist = params['artist'];
        if(artist !== undefined && artist.length >= 3){
          this.spotservice.getArtists(artist)
                    .subscribe(results=>{
                      this.artists = results;
                      this.setArtist = true;
                      console.log(this.artists);
                    });
        }
        
      });

    
  }
}