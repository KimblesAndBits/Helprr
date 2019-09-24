export const postService = {
    create,
    findPosts

function create(title, author, content, url, video) {
    let post = {
        title: title,
        author: author,
        content: content,
        video: video,
        image_video: url,
        likes: 0
    };
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
    };

    return fetch(`/api/post/create`, requestOptions)
        .then(post => {
            return post;
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

function findPosts() {
    return fetch("/api/post/find10", { method: "GET" })
        .then(handleResponse)
        .then(data => {
            return data;
        }
        );
}