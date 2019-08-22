import { Injectable } from '@angular/core';

import { Posts } from '../classes/posts';
// import { POSTSDATA } from '../classes/posts-data';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class PostsService {

  private posts ;
  private subject: Subject<any> = new Subject<string>();
  // public postData: Subject<any> = new Subject<object>();

  constructor(private http: HttpClient) { }

  setUserName(name: string): void {
    // this.userName = name;
    this.subject.next(name);
  }

  getUserName(): Observable<any> {
    return this.subject.asObservable();
  }

  fetchCall(source: string) {
    // tslint:disable-next-line: max-line-length
    return this.http.get(`https://newsapi.org/v1/articles?source=${source}&apiKey=b75366c0a439417d8c44c1b288139ecb`);
  }

  // tslint:disable-next-line: ban-types
  setPostData(posts: Object) {
    this.posts = posts;
  }

  getPosts() {
    return this.posts;
  }

  insertPostData(post: any): void {
    this.posts.push(post);
    console.log(this.posts);
  }

  getPostByID(id: string): Posts {
    console.log('here');
    console.log(this.posts);
    return this.posts[id];
  }

}
