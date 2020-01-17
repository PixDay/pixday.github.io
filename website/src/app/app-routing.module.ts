import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { ProjetComponent } from './components/projet/projet.component';
import { JeuComponent } from './components/jeu/jeu.component';
import { MapComponent } from './components/map/map.component';


const routes: Routes = [
  {path: '', redirectTo: '/profile', pathMatch: 'full'},
  {path: 'profile', component: ProfileComponent},
  {path: 'projets', component: ProjetComponent},
  {path: 'jeux', component: JeuComponent},
  {path: 'map', component: MapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
