import React from "react";

// import material-ui things
import Paper from "material-ui/Paper";

// import photo compoenent
import components from "../../components";

const Photo = components.Photo;
const Comments = components.Comments;

class ImageDetails extends React.Component {
  render() {
    const postId = parseInt(this.props.postId, 10);
    const post = this.props.posts.find(post => post.id === postId);

    return (
      <Paper>
        <Photo post={post} />
        <Comments
          postCode={post.id}
          postId={post.id}
          comments={post.Comments}
        />
      </Paper>
    );
  }
}

export { ImageDetails };
