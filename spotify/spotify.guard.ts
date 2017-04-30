import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Injectable()
export class SpotifyGuard implements CanActivate {
    paramsActivate:boolean = false;
    artist:string;

    constructor(private activatedRoute: ActivatedRoute) {}

    canActivate() {
        this.activatedRoute.queryParams.subscribe((params: Params) => {
            this.artist = params['artist'];
            this.paramsActivate = true;
        });
        // while(this.paramsActivate === false);
        // if(this.artist === undefined)
        //     return false;
        return true;
    }
}