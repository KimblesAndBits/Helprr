export const commentService = {
    create,
    remove,
    findComments
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
        .then(handleResponse)
        .then(comment => {
            return comment;
        });
};

const handleResponse = (response) => {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
};

function findComments(postId) {
    return fetch(`/api/comments/find/${postId}`, { method: "GET" })
        .then(handleResponse)
        .then(comment => {
            return comment;
        }
        );
}

function remove(id, arrayPos) {
    return fetch(`/api/comment/delete/${parseInt(id, 10)}`, {method: 'DELETE'})
        .then( () => {
            return arrayPos;
        });
}