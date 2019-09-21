export const commentService = {
    create,
    remove
};

function create(author, message, post_id) {
    let comment = {
        author: author,
        message: message,
        post_id: post_id
    };
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(comment)
    };

    return fetch(`/api/comment/create`, requestOptions)
        .then(comment => {
            return comment;
        });
};

function remove(id) {
    return fetch(`/api/comment/delete/${id}`, {method: 'DELETE'})
        .then(comment => {
            return comment;
        });
}