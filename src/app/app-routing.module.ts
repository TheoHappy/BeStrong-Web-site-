import {NgModule, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home-page/home.component';
import {AboutComponent} from './about-page/about.component';
import {ContactPageComponent} from './contact-page/contact-page.component';
import {TrainersPageComponent} from './trainers-page/trainers-page.component';
import {ProgramPageComponent} from './program-page/program-page.component';
import {NewsPageComponent} from './news-page/news-page.component';

// http://localhost:4200/ -> HomeComponent
// http://localhost:4200/about -> AboutComponent
// http://localhost:4200/posts -> NewsPageComponent

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'trainers-page', component: TrainersPageComponent},
  {path: 'program-page', component: ProgramPageComponent},
  {path: 'news-page', component: NewsPageComponent },
  {path: 'about-page', component: AboutComponent},
  {path: 'contact-page', component: ContactPageComponent}
];
let appRoutes;
RouterModule.forRoot(
    appRoutes,
    { scrollPositionRestoration: 'enabled' } // <-- HERE
)
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Add options right here
  })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
