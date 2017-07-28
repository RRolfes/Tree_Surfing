import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';


class BookingForm extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      start_date: '',
      end_date: '',
      tree_house_id: this.props.treeHouseId,
      user_id: this.props.session.currentUser.id,
      confirmed: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.errors = null;
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    // add logic for before today
    if (this.state.start_date < this.state.end_date) {

      const booking = this.state;

      this.props.createBooking(booking).then(response => {
        this.errors = false;
        this.setState({
          start_date: '',
          end_date: ''
        });
      }, () => {
        this.errors = true;
        this.setState({
          start_date: '',
          end_date: ''
        });
      }
    );
  } else {
    this.errors = true;
    this.setState({
      start_date: '',
      end_date: ''
    });
  }

}

renderErrors() {
  if (!this.state.start_date || !this.state.end_date) {
    return(
      <div className="review-error">Invalid date!</div>
    );
  }
}


render() {

    return (
      <div className="booking-form">
        <form onSubmit={this.handleSubmit} className="booking-form-box">
          <h3 className="booking-header">Create a booking:</h3>
          {this.errors ? this.renderErrors() : <div></div>}
          <div className="signup-form">
            Start date:
            <input
              type="text"
              placeholder="yyyy/mm/dd"
              value={this.state.start_date}
              onChange={this.update("start_date")}
              className="booking-input"
              />
            End date:
            <input
              type="text"
              placeholder="yyyy/mm/dd"
              value={this.state.end_date}
              onChange={this.update("end_date")}
              className="booking-input"
              />

            <input type="submit" value="Submit" className="submit-button" />

              Booked from:
              {this.props.bookings.map( booking =>
                <span key={booking.id}>
                  {booking.start_date} - {booking.end_date}
                </span>
              )}


          </div>
        </form>
      </div>
    );
  }
}

export default BookingForm;
