import "./Stream.css";
import React from "react";

import { faVideo } from "@fortawesome/free-solid-svg-icons";
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

const StreamBtn = () => {
  return (
    <div className="box">
      <a className="button-post" href="#popup1">
        <FontAwesomeIcon icon={faVideo} size="lg" />
      </a>
    </div>
  );
};

const StreamForm = () => {
  return (
    <div id="popup1" className="overlay-post">
      <div className="popup">
        <h1 style={HeaderPost}>Helprr</h1>

        <p style={subHeaderPost}>Post Tutorial</p>

        <a className="close" href="#">
          ×
        </a>
        <div className="container">
          <form id="contact" action method="post">
            <fieldset>
              <input
                placeholder="Name"
                type="text"
                tabIndex={1}
                required
                autofocus
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Email address"
                type="email"
                tabIndex={2}
                required
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Phone number"
                type="tel"
                tabIndex={3}
                required
              />
            </fieldset>

            <div className="fileUpload">
              <fieldset action="upload.php" method="POST">
                <input type="file" multiple />
                <p>Drag your files here or click in this area.</p>
              </fieldset>
            </div>

            <fieldset>
              <textarea
                placeholder="Type your posting here..."
                tabIndex={5}
                required
                defaultValue={""}
              />
            </fieldset>
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

const StreamModal = () => {
  return (
    <div>
      <StreamBtn />
      <StreamForm />
    </div>
  );
};

export default StreamModal;
