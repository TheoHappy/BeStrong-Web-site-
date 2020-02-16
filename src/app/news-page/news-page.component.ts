import {Component} from '@angular/core'
import {PostsService} from '../posts.service'

@Component({
  selector: 'app-posts',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent {
  constructor(private postsService: PostsService) {}
}
