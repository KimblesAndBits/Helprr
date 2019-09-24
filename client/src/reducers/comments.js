function comments(state = {}, action) {
    switch (action.type) {
        case "CREATE_COMMENT_REQUEST":
            return state;
        case "CREATE_COMMENT_SUCCESS":
            return [
                ...state,
                {
                    author: action.comment.author,
                    message: action.comment.message,
                    post_id: action.comment.post_id
                }
            ];
        case "CREATE_COMMENT_FAILURE":
            return { failure: "We're sorry, somthing went wrong while creating your comment."};
        case "DELETE_COMMENT_REQUEST":
            return state;
        case "DELETE_COMMENT_SUCCESS":
            const commentId = action.id;
            return [
                ...state.slice(0, commentId),
                ...state.slice(commentId + 1)
            ];
        case "DELETE_COMMENT_FAILURE":
            return { failure: "We're sorry, somthing went wrong while deleting your comment." };
        case "FIND_COMMENTS_REQUEST":
            return { findingComments: true};
        case "FIND_COMMENTS_SUCCESS":
            return [...action.comment];
        case "FIND_COMMENTS_FAILURE":
            return { failure: "We're sorry, somthing went wrong while finding the comments." };
        default:
            return state;
    }
}

export default comments;