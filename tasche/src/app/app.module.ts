import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainPageComponent } from 'src/pages/main-page/main-page.component'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AboutPageComponent} from '../pages/about-page/about-page.component'
import {MusicPageComponent} from '../pages/music-page/music-page.component'
import {ContactComponent} from '../pages/contact/contact.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AboutPageComponent,
    MusicPageComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
