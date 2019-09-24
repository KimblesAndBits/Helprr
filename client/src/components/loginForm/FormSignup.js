import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { userActions } from '../../actions/user.actions';
import SocialButton from "./styled/SocialButton";
import BrandButton from "./styled/BrandButton";
import SlidingForm from "./styled/SlidingForm";
import { connect } from 'react-redux';

const divStyle = {
  marginRight: "30px"
};

class FormSignup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        first_name: "",
        last_name: "",
        user_name: "",
        password: ""
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  };

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    if (user.first_name
      && user.last_name
      && user.user_name
      && user.password
      && user.email) {
      this.props.register(user);
    }
  };

  render() {
    const { registering } = this.props;
    return (
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
          <div style={divStyle}>
            <form onSubmit={this.handleSubmit}>
              <input name="first_name" placeholder="First Name" type="text" onChange={this.handleChange} />
              <input name="last_name" placeholder="Last Name" type="text" onChange={this.handleChange} />
              <input name="email" placeholder="Email" type="text" onChange={this.handleChange} />
              <input name="user_name" placeholder="Username" type="text" onChange={this.handleChange} />
              <input name="password" placeholder="Password" type="password" onChange={this.handleChange} />
              <BrandButton type="submit" className="form-header">Sign up</BrandButton>
              {registering &&
                <img alt="Loading Spinner" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
              }
              <BrandButton type="button" className="form-header" onClick={this.props.logout}>Logout</BrandButton>
            </form>
          </div>
        </div>
      </SlidingForm>
    )
  };
};

function mapState(state) {
  const { registering } = state.registration;
  return { registering };
}

const actionCreators = {
  register: userActions.register,
  logout: userActions.logout
}

const connectedRegisterPage = connect(mapState, actionCreators)(FormSignup);
export { connectedRegisterPage as FormSignup };
