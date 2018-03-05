import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class BookingWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: "",
      endDate: "",
      selected: "1 guest",
      userMessage: " ",
      fixed: false
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    if (!this.state.fixed && window.scrollY >= 454) {
      this.setState({fixed: true});
    } else if (this.state.fixed && window.scrollY < 455) {
      this.setState({fixed: false});
    }
  }

  handleStartDate(e) {
    this.setState({ startDate: e.target.value });
  }

  handleEndDate(e) {
    this.setState({ endDate: e.target.value });
  }

  handleSelect(e) {
    this.setState({ selected: e.target.value });
  }

  craeteDateObject(date) {
    const dateArr = date.split("-");
    let year = dateArr[0];
    let month = dateArr[1] - 1;
    let day = dateArr[2];
    let dateObj = new Date(year, month, day);
    return dateObj / 1;
  }

  handleSubmit(e) {
    e.preventDefault();


    const userId = this.props.userId;
    const treeHouseId = this.props.treeHouse.id;
    const bookings = this.props.treeHouse.bookings;


    let today = new Date().setHours(0,0,0,0);
    let startDate = this.craeteDateObject(this.state.startDate);
    let endDate = this.craeteDateObject(this.state.endDate);

    const that = this;

    let valid = true;


    bookings.forEach( function(booking) {
        let bookingStart = that.craeteDateObject(booking.start_date);
        let bookingEnd = that.craeteDateObject(booking.end_date);

        if (endDate > bookingStart && endDate <= bookingEnd) {
          console.log("end in between bookin start/end");
          valid = false;
        } else if (startDate < bookingEnd && endDate >= bookingEnd) {
          console.log("other");
          valid = false;
        } else if (startDate === bookingStart || endDate === bookingEnd) {
          console.log("same start or end");
          valid = false;
        }
      });


    const booking = {
      start_date: this.state.startDate,
      end_date: this.state.endDate,
      user_id: userId,
      tree_house_id: treeHouseId,
      confirmed: false
    };

    if (!endDate || !startDate) {
      this.setState({userMessage: "Please fill in both dates"});
    } else if (startDate < today) {
      this.setState({userMessage: "Start date has passed"});
    } else if (startDate >= endDate) {
      this.setState({userMessage: "Invalid end date"});
    } else if(!valid) {
      this.setState({userMessage: "Conflicts with existing booking"});
    } else {
      this.props.createBooking(booking);
      this.props.history.push('./');
    }
  }


  render() {
    const treeHouse = this.props.treeHouse;
    let options = [];

    for (var i = 1; i <= treeHouse.max_guests ; i++) {
      options.push(<option key={i} value={i}>{ i + " Guest"}</option>);
    }

    let fixed = this.state.fixed ? ("widget-fixed") : ("");

    return(
      <div className={`booking-widget ${fixed}`}>
        <div className="price-bar">
          <span className="price-text">${treeHouse.price}</span>
          <span className="per-night-text"> per night</span>
        </div>
        <div className="error-message">
          {this.state.userMessage}
        </div>
        <div className="booking-form-conatiner">
          <form  onSubmit={this.handleSubmit}>
            <div className="check-in-check-out">
              <div className="check-in">
                <label className="check-in-text">Check In</label>
                <input type="date" className="start-date" onChange={this.handleStartDate} value={this.state.startDate}></input>
              </div>
              <div className="check-out">
                <label className="check-out-text">Check Out</label>
                <input type="date" className="end-date" onChange={this.handleEndDate} value={this.state.endDate}></input>
              </div>
            </div>
            <div className="guest-selector-container">
              <div className="">
                <label className="selector-text">Guests</label>
                <select className="selector" onChange={this.handleSelect} value={this.state.selected}>
                  {options}
                </select>
              </div>
            </div>
            <div className="booking-submit">
              <button className="booking-button" >Book</button>
            </div>
          </form>
          <div className="charge-message">
            <span>You won't be charged yet</span>
          </div>
        </div>
      </div>
    );
  }
}

export default BookingWidget;
