import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routing } from './spotify.routing';
import { SpotifyComponent } from './spotify.component';
import {SpotifyService} from './spotify.service';
import {SpotifyGuard} from './spotify.guard';

@NgModule({
  declarations: [
    SpotifyComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    Routing
  ],
  providers: [
            SpotifyService,
            SpotifyGuard
            ]
})
export class SpotifyModule { }
