import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AboutComponent} from './about-page/about.component';
import {HomeComponent} from './home-page/home.component';
import {NewsPageComponent} from './news-page/news-page.component';
import {PostComponent} from './post/post.component';
import {AboutExtraComponent} from './about-extra/about-extra.component';
import {AppRoutingModule} from './app-routing.module';
import { TrainersPageComponent } from './trainers-page/trainers-page.component';
import { ProgramPageComponent } from './program-page/program-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NewsPageComponent,
    PostComponent,
    AboutExtraComponent,
    TrainersPageComponent,
    ProgramPageComponent,
    ContactPageComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
