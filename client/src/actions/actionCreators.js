import { postService } from "../services/post.service";
import { commentService } from "../services/comment.service";
import { alertActions } from './alert.actions';
import { history } from '../store';

// increment
export function increment(index) {
  return {
    type: "INCREMENT_LIKES",
    index
  };
};

export function addComment(comment) {
  return dispatch => {
    dispatch(request({ comment }));
    let postId = comment.post_id;
    commentService.create(comment.author, comment.message, comment.post_id)
      .then(
        comment => {
          console.log(comment)
          dispatch(success(comment));
          history.push(`/image-details/${postId}`);
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };

  function request(comment) { return { type: "CREATE_COMMENT_REQUEST", comment } }
  function success(comment) { return { type: "CREATE_COMMENT_SUCCESS", comment } }
  function failure(error) { return { type: "CREATE_COMMENT_FAILURE", error } }
};

export function createPost(post) {
  return dispatch => {
    dispatch(request({ post }));
    console.log(post)
    postService.create(post.title, post.author, post.content, post.url, post.video)
      .then(
        post => {
          console.log(post)
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

export function getPosts() {
  return dispatch => {
    dispatch(request());

    postService.findPosts()
      .then(
        post => {
          dispatch(success(post));
          history.push("/posts/find");
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };

  function request() { return { type: "FIND_POSTS_REQUEST" } }
  function success(post) { return { type: "FIND_POSTS_SUCCESS", post } }
  function failure(error) { return { type: "FIND_POSTS_FAILURE", error } }
};

export function getComments(id) {
  return dispatch => {
    dispatch(request());

    commentService.findComments(id)
      .then(
        comment => {
          dispatch(success(comment));
          history.push(`/image-details/${id}`)
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };

  function request() { return { type: "FIND_COMMENTS_REQUEST" } }
  function success(comment) { return { type: "FIND_COMMENTS_SUCCESS", comment } }
  function failure(error) { return { type: "FIND_COMMENTS_FAILURE", error } }
};

// remove comment

export function removeComment(id, post, arrayPos) {
  return dispatch => {
    dispatch(request(id));

    commentService.remove(id, arrayPos)
      .then(
        id => {
          console.log(id);
          dispatch(success(id));
          history.push(`/image-details/${post}`)
        },
        error => dispatch(failure(id, error.toString()))
      );
  };

  function request(id) { return { type: "DELETE_COMMENT_REQUEST", id } }
  function success(id) { return { type: "DELETE_COMMENT_SUCCESS", id } }
  function failure(id, error) { return { type: "DELETE_COMMENT_FAILURE", id, error } }
};
