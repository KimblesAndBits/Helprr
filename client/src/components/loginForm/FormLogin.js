import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { userActions } from '../../actions/user.actions';
import SocialButton from "./styled/SocialButton";
import BrandButton from "./styled/BrandButton";
import SlidingForm from "./styled/SlidingForm";
import { connect } from 'react-redux';

class FormLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { email, password } = this.state;
    if (email && password) {
      this.props.login(email, password);
    }
  };

  render() {
    const { loggingIn } = this.props;
    return (
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
          <form onSubmit={this.handleSubmit}>
            <input name="email" placeholder="Email" type="text" onChange={this.handleChange} />
            <input name="password" placeholder="Password" type="password" onChange={this.handleChange} />
            <BrandButton type="submit">Sign in</BrandButton>
            {loggingIn &&
              <img alt="Loading Spinner" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
            }
          </form>
        </div>
      </SlidingForm>
    )
  }
};

function mapState(state) {
  const { loggingIn } = state.authentication;
  return { loggingIn };
}

const actionCreators = {
  login: userActions.login
};

const connectedLoginPage = connect(mapState, actionCreators)(FormLogin);
export { connectedLoginPage as FormLogin };
