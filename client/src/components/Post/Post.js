import "./Post.css";
import React from "react";
import { connect } from "react-redux";
import { createPost } from "../../actions/actionCreators";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const PostBtn = () => {
  return (
    <label htmlFor="mpo-modal-controller">
      <FontAwesomeIcon icon={faPen} size="lg" />
    </label>
  );
};

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    let user = JSON.parse(localStorage.getItem('helprrUser'));
    this.state = {
      user: { ...user },
      post: {
        title: "",
        author: user.user_name,
        content: "",
        url: ""
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentDidMount() {
    let user = JSON.parse(localStorage.getItem('helprrUser'));
    let { post } = this.state
    this.setState(
      {
        user: { ...user },
        post: {
          ...post,
          author: user.user_name,
          video: false
        }
      }
    );
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { post } = this.state;
    this.setState({
      post: {
        ...post,
        [name]: value
      }
    });
  };

  videoChange() {
    const { post } = this.state;
    this.setState({
      post: {
        ...post,
        video: true
      }
    });
  };

  handleSubmit(event) {
    event.preventDefault();

    const { post } = this.state;
    if (post.title
      && post.content) {
      this.props.create(post);
    }
  };

  render() {
    return (
      <div className="mpo-modal">
        <input
          type="checkbox"
          id="mpo-modal-controller"
          className="mpo-modal-open"
          hidden
        />
        <div className="mpo-modal-wrap">
          <label htmlFor="mpo-modal-controller" className="mpo-modal-overlay" />
          <div className="mpo-modal-body">
            <label htmlFor="mpo-modal-controller" className="mpo-modal-close">
              ×
          </label>
            <input
              type="radio"
              name="content-nav"
              id="modal-content-1"
              className="modal-radio"
              defaultChecked
              hidden
            />
            <input
              type="radio"
              name="content-nav"
              id="modal-content-2"
              className="modal-radio"
              hidden
            />
            <input
              type="radio"
              name="content-nav"
              id="modal-content-3"
              className="modal-radio"
              hidden
            />
            <div className="mpo-modal-slide content-1">
              <div className="mpo-modal-content">
                <h1 className="posting-header">Helprr</h1>
                <p className="posting-subhead">Give Help. Start Here.</p>
                <div className="container-post">
                  <form id="give-help" method="post" onSubmit={this.handleSubmit}>
                    <fieldset>
                      <input
                        placeholder="Title"
                        name="title"
                        type="text"
                        tabIndex={1}
                        required
                        autoFocus
                        onChange={this.handleChange}
                      />
                    </fieldset>

                    <fieldset>
                      <input
                        placeholder="Image/Video URL"
                        name="url"
                        type="text"
                        tabIndex={3}
                        onChange={this.handleChange}
                      />
                    </fieldset>
                    <fieldset>
                        <button
                          type="button"
                          name="video"
                          onClick={this.videoChange}
                        >&nbsp;Check here if this is a video.&nbsp;</button>
                    </fieldset>

                    <fieldset>
                      <textarea
                        placeholder="Describe your tutorial here..."
                        name="content"
                        tabIndex={5}
                        required
                        defaultValue={""}
                        onChange={this.handleChange}
                      />
                    </fieldset>

                    <fieldset>
                      <button
                        name="submit"
                        type="submit"
                        id="help-submit"
                        data-submit="...Sending"
                      >
                        Submit
                    </button>
                    </fieldset>
                  </form>
                </div>

                <div className="mpo-modal-nav">
                  <label htmlFor="modal-content-2" className="next-slide">
                    ››
                </label>
                </div>
              </div>
            </div>

            <div className="mpo-modal-slide content-2">
              <div className="mpo-modal-content">
                <h1 className="posting-header">Helprr</h1>
                <p className="posting-subhead">Get Help. Start Here.</p>

                <div className="container-post">
                  <form id="request-help" method="post" onSubmit={this.handleSubmit}>
                    <fieldset>
                      <input
                        placeholder="Title"
                        name="title"
                        type="text"
                        tabIndex={1}
                        required
                        autoFocus
                        onChange={this.handleChange}
                      />
                    </fieldset>

                    <fieldset>
                      <input
                        placeholder="Image/Video URL"
                        name="url"
                        type="text"
                        tabIndex={3}
                        onChange={this.handleChange}
                      />
                    </fieldset>
                    <fieldset>
                        <button
                          type="button"
                          name="video"
                          onClick={this.videoChange}
                        >&nbsp;Check here if this is a video.&nbsp;</button>
                    </fieldset>

                    <fieldset>
                      <textarea
                        placeholder="Describe your question here..."
                        name="content"
                        tabIndex={5}
                        required
                        defaultValue={""}
                        onChange={this.handleChange}
                      />
                    </fieldset>
                    <fieldset>
                      <button
                        name="submit"
                        type="submit"
                        id="request-submit"
                        data-submit="...Sending"
                      >
                        Submit
                    </button>
                    </fieldset>
                  </form>
                </div>

                <div className="mpo-modal-nav">
                  <label htmlFor="modal-content-1" className="prev-slide">
                    ‹‹
                </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

function mapState(state) {
  const { posts } = state;
  return { posts };
}

const actionCreators = {
  create: createPost
}

const ConnectedPostingForm = connect(mapState, actionCreators)(PostForm);

const PostModal = () => {
  return (
    <div>
      <PostBtn />
      <ConnectedPostingForm />
    </div>
  );
};

export default PostModal;
