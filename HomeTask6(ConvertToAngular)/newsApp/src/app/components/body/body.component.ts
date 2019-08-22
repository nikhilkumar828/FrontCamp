import { Component, OnInit, Input } from '@angular/core';

import { Posts } from '../../classes/posts';
import { PostsService } from '../../services/posts.service';

import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  // tslint:disable-next-line: ban-types
  allPosts: object;
  selectedSource: string;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit() {
        this.setPostsData('cnn');
  }



  setPostsData(source: string): void {
    this.postsService.fetchCall(source).subscribe((data) => {
      console.log(data);
      // tslint:disable-next-line: no-string-literal
      this.postsService.setPostData(data['articles']);
      // tslint:disable-next-line: no-string-literal
      this.allPosts = this.postsService.getPosts();
    });
  }

  changeOfSource(source: string) {
    this.setPostsData(source);
  }

}
