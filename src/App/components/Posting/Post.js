import "./Post.css";
import React from "react";

import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const subHeaderPost = {
  fontSize: "1.4rem",
  lineHeight: "5px",
  paddingBottom: "70px",
  paddingTop: "10px"
};

const HeaderPost = {
  lineHeight: "0px",
  marginTop: "60px",
  paddingBottom: "15px",
  color: "#050117"
};

const PostBtn = () => {
  return (
    <div className="box">
      <a className="button-post" href="#popup1">
        <FontAwesomeIcon icon={faPen} size="lg" />
      </a>
    </div>
  );
};

const PostForm = () => {
  return (
    <div id="popup1" className="overlay-post">
      <div className="popup">
        <h1 style={HeaderPost}>Helprr</h1>

        <p style={subHeaderPost}>Need help? Start here.</p>

        <a className="close" href="#">
          ×
        </a>
        <div className="container">
          <form id="contact" action method="post">
            <fieldset>
              <input
                placeholder="Post Title"
                type="text"
                tabIndex={1}
                required
                autofocus
              />
            </fieldset>

            
            <fieldset>
              <textarea
                placeholder="Title Description..."
                tabIndex={5}
                required
                defaultValue={""}
              />
            </fieldset>
            

            <div className="fileUpload">
              <fieldset action="upload.php" method="POST">
                <input type="file" multiple />
                <p>Drag image or click area (optional)</p>
              </fieldset>
            </div>

            
            <fieldset>
              <button
                name="submit"
                type="submit"
                id="contact-submit"
                data-submit="...Sending"
              >
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

const PostTutorial = () => {
  return (
    <div>
      <PostBtn />
      <PostForm />
    </div>
  );
};

export default PostTutorial;
