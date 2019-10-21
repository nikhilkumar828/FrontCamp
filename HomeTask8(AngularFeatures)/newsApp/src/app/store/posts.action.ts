import { Action } from '@ngrx/store';
import { Posts } from '../classes/posts';


export const ADD_POST = 'ADD_POST';
export const FETCH_POSTS = 'FETCH_POSTS';
export const ADD_FETCHED_POSTS = 'ADD_FETCHED_POSTS';
export const ADD_COMMENT_BY_ID = 'ADD_COMMENT_BY_ID';

export class AddPost implements Action {
  readonly type = ADD_POST;

  constructor(public payload: Posts) {}
}

export class FetchPosts implements Action {
  readonly type = FETCH_POSTS;

  constructor(public payload: string) {}
}

export class AddFetchPosts implements Action {
    readonly type = ADD_FETCHED_POSTS;

    constructor(public payload: Posts[]) {}
}

export class AddCommentByID implements Action {
    readonly type = ADD_COMMENT_BY_ID;

    constructor(public payload: {id: number , comment: string}) {}
}

export type postActions =
  | AddPost
  | FetchPosts
  | AddFetchPosts
  | AddCommentByID;
