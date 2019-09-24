/* import react from react don't worry its will not be duplicate
if its imported from multiple places  */
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../../actions/actionCreators";
//import material-ui things
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";

// import photo compoenent
import components from "../../components";

// import styles
import "./ImageGrid.css";

// importing font icons
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Photo = components.Photo;

const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: "center"
  }
});

class ImageGridComponent extends React.Component {
  // constructor to set initial state to what's in props
  constructor(props) {
    // required step: always call the parent class constructor
    super(props);

    /* set the state directly. use props if necessary.
    keep track of searchString (text input box), posts (original posts from props)
    and finally currentPosts (what is actually being displayed) */
    this.state = {
      searchString: "",
      classes: this.props.classes,
      currentPosts: this.props.posts
    };
  }

  /* 
  call on this method each time user changes at least one character in text input box
  update currentPosts based on what user types using JavaScripts built-in filter and match methods
  */
  handleChange = event => {
    let currentPosts = this.state.currentPosts;
    let search = this.refs.search.value;

    if (search.length > 0) {
      currentPosts = this.props.posts.filter(function (post) {
        return post.content.toLowerCase().match(search);
      });
    } else {
      currentPosts = this.props.posts;
    }
    this.setState({
      currentPosts,
      searchString: search
    });
  };

  render() {
    // changing this from being set using props to setting it using state
    let posts = this.state.currentPosts;
    let classes = this.state.classes;

    return (
      // adding input text box with value attribute and attached an onChange event listener
      <div className={classes.root}>

        <div className="search-container">
          <input
            type="text"
            id="search-bar"
            placeholder="What can I help you with today?"
            value={this.state.searchString}
            ref="search"
            onChange={this.handleChange}
          />
          <FontAwesomeIcon icon={faSearch} size="lg" className="search-icon" />
        </div>
        {
          (posts.length > 0) ? (
            <Grid container spacing={40}>
              {posts.map((post) => (
                <Grid item xs={12} sm={6} lg={4} key={post.id}>
                  <Photo
                    classes={{ ...classes }}
                    post={{ ...post }}
                  />
                </Grid>
              ))}
            </Grid>)
            : (<span></span>)
        }  <hr
          style={{
            margin: 30
          }}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const ConnectedImageGridComponent = connect(mapStateToProps, mapDispachToProps)(ImageGridComponent);

const ImageGrid = withStyles(styles)(ConnectedImageGridComponent);

export { ImageGrid };
