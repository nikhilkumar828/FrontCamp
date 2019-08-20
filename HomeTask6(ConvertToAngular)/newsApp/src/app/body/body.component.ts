import { Component, OnInit, Input } from '@angular/core';

import { Posts } from '../posts';
import { PostsService } from '../posts.service';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  allPosts: Posts[] = [];

  @Input() data: any;

  constructor(private route: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit() {
      this.route.params.subscribe(routeParams => {
      this.setPostsData(routeParams.src);
    });
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges() {
    console.log('onchange');
    this.allPosts = this.data;
  }

  setPostsData(source: string): void {
    if ( source === 'all') {
      this.allPosts = this.postsService.getPosts();
    } else {
       this.allPosts = this.postsService.getPostsSourceData(source);
    }
  }

}
