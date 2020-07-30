import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { tap, switchMap, map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import * as PostActions from './posts.action';
import { Posts } from '../classes/posts';

@Injectable()
export class PostEffects {

    constructor(
        private actions$: Actions,
        private http: HttpClient,
        private router: Router
      ) {}

  @Effect()
  postInitialize = this.actions$.pipe(
    ofType(PostActions.FETCH_POSTS),
    switchMap((authData: PostActions.FetchPosts) => {
    return this.http.get<Posts[]>(`https://newsapi.org/v1/articles?source=${authData.payload}&apiKey=b75366c0a439417d8c44c1b288139ecb`)
    .pipe(
      map(data => {
        let i = 0;
        let postData = [];
        // tslint:disable-next-line: no-string-literal no-shadowed-variable
        postData = data['articles'].map(data => {
          return (
          {
            ...data,
            id : i++,
            comments : []
          }
          );
        });
        return new PostActions.AddFetchPosts(postData);
      })
    );
    })
  );

}
