import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  // if logged in, go to route index
  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }
  
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user;
    if (e.currentTarget.innerHTML === "Guest Login") {
      user = {
        email: "Guest@TreeSurfing.com",
        password: "password"
      };
    } else {
      user = this.state;
    }
    this.props.login(user);
  }

      renderErrors() {
        return(
          <ul>
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
        );
      }

      render() {
        return (
            <div className="login-form-container">
              <form onSubmit={this.handleSubmit} className="login-form-box">
                <h2 className="login-header">Please Login</h2>
                {this.renderErrors()}
                <div className="login-form">
                    <input type="text"
                      value={this.state.email}
                      onChange={this.update('email')}
                      className="login-input"
                      placeholder="email"
                      />
                    <input
                      type="password"
                      value={this.state.password}
                      onChange={this.update('password')}
                      className="login-input"
                      placeholder="password"
                      />
                  <input
                    className="login_input"
                    className="submit-button"
                    type="submit"
                    value="Submit" />
                  <button
                    className="login_input"
                    onClick={this.handleSubmit}>
                    Guest Login
                  </button>
                  Not a member yet?
                  <Link
                    to="/signup"
                    className="login_input"
                    className="Link">
                    Sign Up
                  </Link>
                </div>
              </form>
            </div>
        );
      }
    }

    export default withRouter(SessionForm);
