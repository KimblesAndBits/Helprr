export const postService = {
    create
};

function create(title, author, content, url, video) {
    let post = {
        title: title,
        author: author,
        content: content,
        video: video,
        image_video: url,
        likes: 0
    };
    console.log(post);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
    };

    return fetch(`/api/post/create`, requestOptions)
        .then(post => {
            return post;
        });
}