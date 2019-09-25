function posts(state = {}, action) {
  switch (action.type) {
    case "CREATE_POST_REQUEST":
      return state;
    case "CREATE_POST_SUCCESS":
      return [
        ...state,
        {
          id: action.post.id,
          author: action.post.author,
          content: action.post.content,
          title: action.post.title,
          image_video: action.post.image_video,
          video: action.post.video,
          likes: action.post.likes
        }
      ];
    case "CREATE_POST_FAILURE":
      return {};
    case "FIND_POSTS_REQUEST":
      return { finding: true };
    case "FIND_POSTS_SUCCESS":
      return [...action.post];
    case "FIND_POSTS_FAILURE":
      return {};
    case "INCREMENT_LIKES":
      console.log("Incrementing Likes!!");
      const i = action.index;
      return [
        ...state.slice(0, i), // before the one we are updating
        { ...state[i], likes: state[i].likes + 1 },
        ...state.slice(i + 1) // after the one we are updating
      ];
    default:
      return state;
  }
}

export default posts;
