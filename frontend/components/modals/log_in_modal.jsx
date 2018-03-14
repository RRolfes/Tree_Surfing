import React from 'react';
import LogInFormContainer from '../log_in/log_in_form_container';

class LogInModal extends React.Component {
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
        <input type="button" value="Sign In" onClick={ () => this.openModal()}/>
        <div className={`modal-container ${open}`}>
          <div className="modal-contents">
            <LogInFormContainer />
          </div>
        </div>
        <section className={`modal-overlay ${open}`} onClick={ () => this.closeModal()}/>
      </section>
    );
  }
}

export default LogInModal;
