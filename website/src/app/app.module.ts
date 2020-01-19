import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';

/* ANGULAR MATERIAL COMPONENTS */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

/* PERSONAL COMPONENTS */
import { ProfileComponent } from './components/profile/profile.component';
import { ProjetComponent } from './components/projet/projet.component';
import { JeuComponent } from './components/jeu/jeu.component';
import { MapComponent } from './components/map/map.component';
import { ToolComponent } from './components/tool/tool.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProjetComponent,
    JeuComponent,
    MapComponent,
    ToolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
