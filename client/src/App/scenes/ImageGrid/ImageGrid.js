/* import react from react don't worry its will not be duplicate
if its imported from multiple places  */
import React from "react";

//import prop types to make sure component give its pops right
import PropTypes from "prop-types";

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
  posts: this.props.posts,
  classes: this.props.classes,
  increment: this.props.increment,
  currentPosts: this.props.posts
  };
}

/* 
call on this method each time user changes at least one character in text input box
update currentPosts based on what user types using JavaScripts built-in filter and match methods
*/
handleChange = event => {
  let currentPosts = this.state.currentPosts;
  let posts = this.state.posts;
  let search = this.refs.search.value;
 
  if (search.length > 0) {
    currentPosts = posts.filter(function(post) {
      return post.caption.toLowerCase().match(search);
    });
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
 let increment = this.state.increment;   

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


        <Grid container spacing={40}>
          {posts.map((post, index) => (
            <Grid item xs={12} sm={6} lg={4} key={post.id}>
              <Photo
                post={{
                  ...post,
                  index
                }}
                onLikeClicked={increment}
              />
            </Grid>
          ))}
        </Grid>
        <hr
          style={{
            margin: 30
          }}
        />
      </div>
    );
  }
}

ImageGridComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

const ImageGrid = withStyles(styles)(ImageGridComponent);

export { ImageGrid };
