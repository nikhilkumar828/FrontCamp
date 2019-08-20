import { Component, OnInit, Input } from '@angular/core';

import { Posts } from '../../classes/posts';
import { PostsService } from '../../services/posts.service';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  allPosts: Posts[] = [];
  selectedSource: string;

  constructor(private route: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit() {
      // this.route.params.subscribe(routeParams => {
      this.setPostsData('all');
    // });
  }

  setPostsData(source: string): void {
    if ( source === 'all') {
      this.allPosts = this.postsService.getPosts();
    } else {
       this.allPosts = this.postsService.getPostsSourceData(source);
    }
  }

}
