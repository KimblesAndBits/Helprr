import React from "react";

import Input, { InputLabel } from "material-ui/Input";
import { FormControl } from "material-ui/Form";
import { withStyles } from "material-ui/styles";

/**
 * import prop types to make sure component give its pops right
 */
import PropTypes from "prop-types";

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
  handleSubmit(e) {
    e.preventDefault();
    const { postCode } = this.props;
    const comment = this.state.comment;
    this.props.onFormSubmit(postCode, comment);
    this.setState({
      author: "",
      comment: ""
    });
  }

  state = {
    author: "",
    comment: ""
  };

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
        style={{
          widht: "100%"
        }}
      >
        <FormControl className={classes.formControl}>
          <InputLabel className="input-label-commt" htmlFor="name-simple">
            Comment
          </InputLabel>
          <Input
            value={this.state.comment}
            onChange={this.handleChange("comment")}
            placeholder="comment"
          />
        </FormControl>

        <input type="submit" hidden />
      </form>
    );
  }
}

AddCommentsFormComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

const AddCommentsForm = withStyles(styles)(AddCommentsFormComponent);

export default AddCommentsForm;
