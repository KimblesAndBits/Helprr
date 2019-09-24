import React from "react";
import List, {
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from "material-ui/List";
import Avatar from "material-ui/Avatar";
import IconButton from "material-ui/IconButton";
import WorkIcon from "material-ui-icons/Work";
import ClearIcon from "material-ui-icons/Clear";

import AddCommentsForm from "./components/AddCommentsForm/AddCommentsForm";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    let user = JSON.parse(localStorage.getItem('helprrUser'));
    this.state = {
      user: { ...user },
      comments: this.props.comments
    }
  }

  renderComments(comment) {
    return (
      <ListItem key={comment.id}>
        <Avatar>
          <WorkIcon />
        </Avatar>
        <ListItemText inset primary={comment.message} secondary={comment.author} />
        {
          (this.state.user.user_name === comment.author)
            ?
            (<ListItemSecondaryAction>
              <IconButton
                onClick={() =>
                  this.props.removeComment(comment.id, this.props.postCode, comment.arrayPos)
                }
              >
                <ClearIcon />
              </IconButton>
            </ListItemSecondaryAction>)
            :
            (<span></span>)
        }
      </ListItem>
    );
  }

  render() {
    let renderedComponents = [];

    if (this.props.comments && this.props.comments.length) {
      renderedComponents.push(
        <List component="nav">
          {this.props.comments.map(this.renderComments.bind(this))}
        </List>
      );
    } else {
      renderedComponents.push(
        <div
          style={{
            margin: 30,
            padding: 20,
            textAlign: "center"
          }}
        >
          <p className="comments-txt">Comments</p>
        </div>
      );
    }

    renderedComponents.push(
      <AddCommentsForm
        postCode={this.props.postCode}
      />
    );

    return renderedComponents;
  }
}

export default Comments;
