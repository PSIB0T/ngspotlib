# NgSpotifylib

Angular module that fetches artist's names from spotify

## Prerequisites
[Angular4](https://angular.io/)

## Example code

export class AppComponent implements OnInit{
  title = 'NG Spotify';
  artist:string = "";

  constructor(private router: Router){

  }
  ngOnInit(){

  }
  search(){
    this.router.navigate(['/link'], { queryParams: { artist: this.artist } });
    
  }

}


