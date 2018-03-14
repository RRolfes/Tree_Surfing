import React from 'react';
import LogInFormContainer from '../log_in/log_in_form_container';


class LogInModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open : false,
      current : "Sign Up"
    };

    this.closeModal = this.closeModal.bind(this);
  }

  componentWillUnmount() {
    this.closeModal();
  }

  openModal() {
    this.setState({
      open : true
    });
  }

  closeModal() {
    this.setState({
      open : false
    });
  }

  render() {

    let open = this.state.open ? ("modal-open") : ("");
    let current = (this.state.current !== '' && this.state.current === "Sign Up") ? true : false;


    debugger;

    return(

      <section>
        <input className="modal-input" type="button" value="Log In" onClick={ () => this.openModal()}/>
        <div className={`modal-container ${open}`}>
          <div className="modal-contents">
            <div className="modal-and-switch">
              <LogInFormContainer />
              <input className="switch" type="button" value="opposite" />
            </div>

          </div>
        </div>
        <section className={`modal-overlay ${open}`} onClick={ () => this.closeModal()}/>
      </section>
    );
  }
}

export default LogInModal;
