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
    console.log(postId);
    const post = this.props.posts.find(post => post.id === postId);
    const index = this.props.posts.indexOf(post);

    post.index = index;


    return (
      <Paper>
        <Photo post={post} onLikeClicked={this.props.increment} />
        <Comments
          postCode={post.id}
          postId={post.id}
          onRemoveComments={this.props.removeComment}
          onAddComments={this.props.addComment}
        />
      </Paper>
    );
  }
}

export { ImageDetails };
