import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../../actions/actionCreators";
// import material-ui things
import Paper from "material-ui/Paper";

// import photo compoenent
import components from "../../components";

const Photo = components.Photo;
const Comments = components.Comments;

class ImageDetailsComponent extends React.Component {
  componentDidMount() {
    if (!this.props.posts.length) {
      this.props.getPosts();
    }
    this.props.getComments(this.props.postId);
  }

  render() {
    const postId = parseInt(this.props.postId, 10);
    let post = {}
    if (this.props.posts.length) {
      post = this.props.posts.find(post => post.id === postId);
    }
    if (this.props.comments.length) {
      let i = 0;
      this.props.comments.forEach(element => {
        element.arrayPos = i;
        i++;
      })
    }

    return (
      <Paper>
        <Photo post={post} />
        <Comments
          postCode={post.id}
          postId={post.id}
          comments={this.props.comments}
          removeComment={this.props.removeComment}
        />
      </Paper>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const ImageDetails = connect(mapStateToProps, mapDispachToProps)(ImageDetailsComponent);


export { ImageDetails };
