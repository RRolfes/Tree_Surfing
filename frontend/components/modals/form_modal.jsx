import React from 'react';

class LogInModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open : false,
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
    let buttonName = this.props.buttonName;
    let open = this.state.open ? ("modal-open") : ("");

    return(

      <section>
        <input className="modal-input" type="button" value={buttonName} onClick={ () => this.openModal()}/>
        <div className={`modal-container ${open}`}>
          <div className="modal-contents">

          </div>
        </div>
        <section className={`modal-overlay ${open}`} onClick={ () => this.closeModal()}/>
      </section>
    );
  }
}

export default LogInModal;
