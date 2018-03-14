import React from 'react';
import LogInFormContainer from '../log_in/log_in_form_container';
import SignUpFormContainer from '../sign_up/sign_up_form_container';


class LogInSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      logIn: false,
      signUp : false,
      opposite: '',
    };
  }

  componentWillUnmount() {
    this.closeModal();
  }

  openLogIn() {
    this.setState({
      open: true,
      logIn: true,
      signUp: false,
      opposite: "Sign Up"
    });
  }

  openSignUp() {
    this.setState({
      open: true,
      logIn: false,
      signUp: true,
      opposite: "Log In"
    });
  }

  closeModal() {
    this.setState({
      open : false,
      signUp : false,
      logIn: false,
      opposite: '',
    });
  }

  switchModal() {
    if (this.state.logIn) {
      this.setState({
        logIn: false,
        signUp: true,
        opposite: 'Log In'
      });
    } else if (this.state.signUp) {
      this.setState({
        logIn: true,
        signUp: false,
        opposite: 'Sign Up'
      });
    }
  }

  render() {

    let open = this.state.open ? ("modal-open") : ("");
    let logIn = this.state.logIn;
    let signUp = this.state.signUp;
    let opposite = this.state.opposite;

    let current = null;

    if (open && logIn) {
      current = (
        <div className="modal-and-switch">
          <LogInFormContainer />
          <div className="switch-container">
            <input className="switch" type="button" value={opposite} onClick={ () => this.switchModal()}/>
          </div>
        </div>
      );
    } else if (open && signUp) {
      current = (
        <div className="modal-and-switch">
          <SignUpFormContainer />
          <div className="switch-container">
            <input className="switch" type="button" value={opposite} onClick={ () => this.switchModal()}/>
          </div>
        </div>
      );
    }



    return(

      <section>
        <div className="modal-inputs-container">
          <input className="modal-input" type="button" value="Join TreeSurfing" onClick={ () => this.openSignUp()}/>
          <input className="modal-input" type="button" value="Log In" onClick={ () => this.openLogIn()}/>
        </div>
        <div className={`modal-container ${open}`}>
          <div className="modal-contents">
            {current}
          </div>
        </div>
        <section className={`modal-overlay ${open}`} onClick={ () => this.closeModal()}/>
      </section>
    );
  }
}

export default LogInSignUp;
