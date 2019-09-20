import "./Stream.css";
import React from "react";

import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const subHeaderPost = {
  fontSize: "1.4rem",
  lineHeight: "5px",
  paddingBottom: "70px",
  paddingTop: "10px",
  color: "#695958"
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

        <p style={subHeaderPost}>Start Your Livestream. Start Teaching!</p>

        <a className="close" href="/close">
          ×
        </a>
        <div className="container">
          <form id="contact" action method="post">
            <fieldset>
              <input
                placeholder="Title"
                type="text"
                tabIndex={1}
                required
                autofocus
              />
            </fieldset>              

            <div className="video-field">                          
                <FontAwesomeIcon icon={faPlay} size="lg" className="play-padding"/>              
            </div>

            <fieldset>
            <div>
              <textarea
                placeholder="Describe your livestream here..."
                tabIndex={5}
                required
                defaultValue={""}
              />
              </div>
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
