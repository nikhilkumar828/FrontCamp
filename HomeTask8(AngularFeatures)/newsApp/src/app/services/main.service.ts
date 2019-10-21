import { Injectable } from '@angular/core';
import { Posts } from 'src/app/classes/posts';
import { Subject } from 'rxjs';
import { sample, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as InterfacePost from '../store/posts.reducer';
import * as postActions from '../store/posts.action';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  postsChanged = new Subject<Posts[]>();
  // tslint:disable-next-line: no-inferrable-types
  adminLogedIn: boolean = false;

  constructor(private store: Store<{posts: InterfacePost.State}>) { }

  private postsData: Posts[] ;

  setPosts(posts: Posts[]) {
    this.postsData = posts;
    console.log(this.postsData);
    // this.postsChanged.next(this.postsData);
    // this.store.dispatch(new postActions.FetchPosts(posts));
  }

  setLoginInfo(status: boolean) {
    this.adminLogedIn = status;
  }

  getPosts() {
    return this.postsData;
  }

  getPostByID(id: number): Posts {
    // return this.postsData[id];
    let postByID ;
    this.store.select('postList')
    .pipe(
      map( (data) => {
        return data.posts[id];
      }
      )
    ).subscribe(post => {
    postByID = post;
    }
    );
    return postByID;
  }

  insertPostData(post: any): void {
    // this.postsData.push(post);
    // console.log(this.postsData);
    // this.postsChanged.next(this.postsData);
    this.store.dispatch(new postActions.AddPost(post));
  }

  loginFlag() {
    return this.adminLogedIn;
  }

  writeComments(comment: string, id: number) {
    // this.postsData[id].comments.push(comment);
    // tslint:disable-next-line: object-literal-shorthand
    this.store.dispatch(new postActions.AddCommentByID({id: id , comment: comment}));
  }

  // getComments(id: number) {
  //   return this.postsData[id].comments;
  // }
}
