import React from "react";
import { addComment } from "../../../../actions/actionCreators";
import Input, { InputLabel } from "material-ui/Input";
import { FormControl } from "material-ui/Form";
import { withStyles } from "material-ui/styles";
import { connect } from "react-redux";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    width: "98%"
  }
});

class AddCommentsFormComponent extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    const { postCode } = this.props;
    const message = {
      message: this.state.message,
      author: this.state.author,
      post_id: postCode.toString()
    }
    console.log(message);
    this.props.create(message);
    this.setState({
      author: "",
      message: ""
    });
  }

  state = {
    author: "",
    message: ""
  };

  componentDidMount() {
    let user = JSON.parse(localStorage.getItem('helprrUser'));
    this.setState({ author: user.user_name });
    console.log(this.props);
  }

  handleChange = field => event => {
    this.setState({ [field]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form
        ref="commentForm"
        className={classes.container}
        onSubmit={this.handleSubmit.bind(this)}
      >
        <FormControl
          className={classes.formControl}
          style={{
            width: "85%",
            float: "left"
          }}>
          <InputLabel className="input-label-commt" htmlFor="name-simple">
            Comment
          </InputLabel>
          <Input
            value={this.state.message}
            onChange={this.handleChange("message")}
            placeholder="comment"
          />
        </FormControl>

        <button style={{ float: "right" }} type="submit" >Submit</button>
      </form>
    );
  }
}

function mapState(state) {
  const { comments } = state;
  return { comments };
}

const actionCreators = {
  create: addComment
}

const ConnectedAddCommentsForm = connect(mapState, actionCreators)(AddCommentsFormComponent);

const AddCommentsForm = withStyles(styles)(ConnectedAddCommentsForm);

export default AddCommentsForm;
