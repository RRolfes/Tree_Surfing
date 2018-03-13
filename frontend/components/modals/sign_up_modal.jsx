import React from 'react';
import SignUpFormContainer from '../sign_up/sign_up_form_container';

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open : false
    };
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

    return(
      <section>
        <input type="button" value="Sign Up" onClick={ () => this.openModal()}/>
        <div className={`modal-container ${open}`}>
          <div className="modal-contents">
            <SignUpFormContainer />
          </div>
        </div>
        <section className={`modal-overlay ${open}`} onClick={ () => this.closeModal()}/>
      </section>
    );
  }
}

export default SignUpModal;
