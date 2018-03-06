import React from 'react';
import Modal from 'react-awesome-modal';
import SignUpForm from './sign_up_form_container';


class SignUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible : false
    };
  }

  openModal() {
    this.setState({
      visible : true
    });
  }

  closeModal() {
    this.setState({
      visible : false
    });
  }


  render() {
    return(
      <section>
          <input type="button" value="Sign Up" onClick={() => this.openModal()} />
          <Modal
              visible={this.state.visible}
              effect="fadeInUp"
              onClickAway={() => this.closeModal()}
          >
              <div>
                  <SignUpForm />
              </div>
          </Modal>
      </section>
    );
  }
}

export default SignUpModal;
