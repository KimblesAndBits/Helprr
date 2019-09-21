import { postService } from "../services/post.service";
import { alertActions } from './alert.actions';
import { history } from '../../store';

// increment
export function increment(index) {
  return {
    type: "INCREMENT_LIKES",
    index
  };
};

// add comment
export function addComment(postId, author, comment) {
  return {
    type: "ADD_COMMENT",
    postId,
    author,
    comment
  };
};

export function createPost(post) {
  return dispatch => {
    dispatch(request({ post }));

    postService.create(post.title, post.author, post.content, post.url)
      .then(
        post => {
          dispatch(success(post));
          history.push('/post/create');
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };

  function request(post) { return { type: "CREATE_POST_REQUEST", post } }
  function success(post) { return { type: "CREATE_POST_SUCCESS", post } }
  function failure(error) { return { type: "CREATE_POST_FAILURE", error } }
};

// remove comment

export function removeComment(postId, i) {
  return {
    type: "REMOVE_COMMENT",
    i,
    postId
  };
};
