import "./Post.css";
import React from "react";

import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const PostBtn = () => {
  return (
    <label htmlFor="mpo-modal-controller">
      <FontAwesomeIcon icon={faPen} size="lg" />
    </label>
  );
};

const PostForm = () => {
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
                <form id="contact" method="post">
                  <fieldset>
                    <input
                      placeholder="Title"
                      type="text"
                      tabIndex={1}
                      required
                      autoFocus
                    />
                  </fieldset>

                  <div className="fileUpload">
                    <fieldset action="upload.php" method="POST">
                      <input type="file" multiple />
                      <FontAwesomeIcon icon={faUpload} size="lg" />
                      <p className="upload-post">Drag video or image here or click in area.</p>
                      
                    </fieldset>
                  </div>

                  <fieldset>
                    <textarea
                      placeholder="Describe your tutorial here..."
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
                <form id="contact" method="post">
                  <fieldset>
                    <input
                      placeholder="Title"
                      type="text"
                      tabIndex={1}
                      required
                      autoFocus
                    />
                  </fieldset>

                  <div className="fileUpload">
                    <fieldset action="upload.php" method="POST">
                      <input type="file" multiple />
                      <FontAwesomeIcon icon={faUpload} size="lg" />
                      <p className="upload-post">Drag images here or click in area.</p>
                    </fieldset>
                  </div>

                  <fieldset>
                    <textarea
                      placeholder="Describe your question here..."
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
};

const PostModal = () => {
  return (
    <div>
      <PostBtn />
      <PostForm />
    </div>
  );
};

export default PostModal;
