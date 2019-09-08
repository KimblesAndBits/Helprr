import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SocialButton from "./styled/SocialButton";
import BrandButton from "./styled/BrandButton";
import SlidingForm from "./styled/SlidingForm";

const FormSignup = () => (
  <SlidingForm signup>
    <div className="main-register">
      <h1 className="form-header">Create Account</h1>
      <div>
        <SocialButton>
          <FontAwesomeIcon icon={["fab", "facebook-f"]} />
        </SocialButton>
        <SocialButton>
          <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
        </SocialButton>
        <SocialButton>
          <FontAwesomeIcon icon={["fab", "google"]} />
        </SocialButton>
      </div>
      <p>or register with your email</p>
      <form>
        <input placeholder="Name" type="text" />
        <input placeholder="Email" type="text" />
        <input placeholder="Password" type="password" />
      </form>
      <BrandButton className="form-header">Sign up</BrandButton>
    </div>
  </SlidingForm>
);

export default FormSignup;
