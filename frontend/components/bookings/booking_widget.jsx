import React from 'react';

class BookingWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: "",
      endDate: "",
      selected: "1 guest",
      userMessage: "",
      fixed: false
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
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
              <button className="booking-button">Book</button>
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
