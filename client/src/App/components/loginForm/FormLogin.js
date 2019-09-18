import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SocialButton from "./styled/SocialButton";
import BrandButton from "./styled/BrandButton";
import SlidingForm from "./styled/SlidingForm";

const FormLogin = () => (
  <SlidingForm>
    <div className="main-register">
      <h1 className="form-header">Sign in</h1>
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
      <p>or use your account</p>
      <form>
        <input placeholder="Email" type="text" />
        <input placeholder="Password" type="password" />
      </form>
      <p>
        <a href="#">Forgot your password?</a>
      </p>
      <BrandButton>Sign in</BrandButton>
    </div>
  </SlidingForm>
);

export default FormLogin;
