import React from "react";
import "./Stream.css";

import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Stream = () => {
  return (
    <div>
      <p className="subheader-stream">Live Stream</p>
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

        <div className="fileUpload">
          <fieldset action="upload.php" method="POST">
            <input type="file" multiple />
            <p>
              <FontAwesomeIcon
                icon={faUpload}
                size="lg"
                className="circle-icon"
              />
            </p>
          </fieldset>
        </div>

        <fieldset>
          <textarea
            placeholder="Describe your live stream here..."
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
  );
};

export default Stream;
