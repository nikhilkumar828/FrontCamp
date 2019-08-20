import { Injectable } from '@angular/core';

import { Posts } from './posts';
import { POSTSDATA } from './posts-data';

@Injectable()
export class PostsService {

  constructor() { }

  getPosts(): Posts[] {
    return POSTSDATA;
  }

  getPostsSourceData(name: string): Posts[] {
    let selectedData: Posts[] = [];
    selectedData =  POSTSDATA.filter( (el) => {
      return el.postCategory === name.toUpperCase();
    });
    return selectedData;
  }

  insertPostData(post: Posts): void {
    POSTSDATA.push(post);
  }

  getPostByID(id: string): Posts {
    let postData: Posts[];
    postData =  POSTSDATA.filter( (el) => {
      return el.id === id;
    });
    return postData[0];
  }

}
