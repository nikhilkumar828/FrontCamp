import { Posts } from '../classes/posts';
import * as PostActions from './posts.action';

export interface State {
  posts: Posts[];
}

const initialState: State = {
    posts : []
};

export function postReducer(
  state: State = initialState,
  action: PostActions.postActions
) {
  switch (action.type) {
    case PostActions.ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    case PostActions.ADD_FETCHED_POSTS:
      return {
        ...state,
        posts: [...action.payload]
      };
      case PostActions.ADD_COMMENT_BY_ID:

      const updatedPost = {
            ...state.posts[action.payload.id],
            comments : [...state.posts[action.payload.id].comments , action.payload.comment]
      };
      console.log(updatedPost);

      const updatedPosts = [...state.posts];
      updatedPosts[action.payload.id] = updatedPost;

      return {
        ...state,
        posts: updatedPosts
      };
    default:
      return state;
  }
}
