import { Component, OnInit, Input } from '@angular/core';

import { Posts } from '../../../classes/posts';
import { PostsService } from '../../../services/posts.service';

import { Subscription, Observable } from 'rxjs';
import { MainService } from '../../../services/main.service';

import { Store } from '@ngrx/store';
import * as InterfacePost from '../../../store/posts.reducer';
import * as postActions from '../../../store/posts.action';



@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  // tslint:disable-next-line: ban-types
  // allPosts: object;
  allPosts: Observable<{posts: Posts[]}>;
  selectedSource: string;
  subscription: Subscription;

      constructor(private postsService: PostsService,
                  private mainService: MainService,
                  private store: Store<{postList: InterfacePost.State}> ) { }

  ngOnInit() {
    this.allPosts = this.store.select('postList');
    console.log(this.allPosts);
  }



  setPostsData(source: string): void {
    // this.postsService.fetchCall(source);
    this.store.dispatch(new postActions.FetchPosts(source));
  }

  changeOfSource(source: string) {
    this.setPostsData(source);
  }

}
