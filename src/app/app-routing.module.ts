import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {HomeComponent} from './home-page/home.component'
import {AboutComponent} from './about-page/about.component'
import {ContactPageComponent} from './contact-page/contact-page.component';
import {TrainersPageComponent} from './trainers-page/trainers-page.component';
import {ProgramPageComponent} from './program-page/program-page.component';
import {NewsPageComponent} from './news-page/news-page.component';

// http://localhost:4200/ -> HomeComponent
// http://localhost:4200/about -> AboutComponent
// http://localhost:4200/posts -> NewsPageComponent

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about-page', component: AboutComponent},
  {path: 'contact-page', component: ContactPageComponent},
  {path: 'trainers-page', component: TrainersPageComponent},
  {path: 'program-page', component: ProgramPageComponent},
  {path: 'news-page', component: NewsPageComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
