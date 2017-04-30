import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpotifyComponent } from './spotify.component';
import {SpotifyGuard} from './spotify.guard';

const routes: Routes = [
  { path: '', component: SpotifyComponent, canActivate:[SpotifyGuard]},
];

export const Routing: ModuleWithProviders = RouterModule.forChild(routes);