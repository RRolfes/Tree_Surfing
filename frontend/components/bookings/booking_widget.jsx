import React from 'react';

class BookingWidget extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        startDate: "",
        endDate: "",
        selected: "",
        userMessage: "",
        fixed: false
      };

      this.handleScroll = this.handleScroll.bind(this);
      this.handleStartDate = this.handleStartDate.bind(this);
      this.handleEndDate = this.handleEndDate.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    if (!this.state.fixed && window.scrollY >= 450) {
      this.setState({fixed: true});
    } else if (this.state.fixed && window.scrollY < 450) {
      this.setState({fixed: false});
    }
  }

  handleStartDate(e) {
    this.setState({startDate: e.target.value});
  }

  handleEndDate(e) {
    this.setState({endDate: e.target.value});
  }

  render() {
    const treeHouse = this.props.treeHouse;
    let fixed = this.state.fixed ? ("widget-fixed") : ("");

    return(
      <div className={`booking-widget ${fixed}`}>
        <div className="price-bar">
          <span className="price-text">${treeHouse.price}</span>
          <span className="per-night-text"> per night</span>
        </div>
        <div className="booking-form-conatiner">
          <form className="check-in-check-out" onSubmit={this.handleSubmit}>
            <div className="check-in">
              <label>Check In</label>
              <input type="date" className="start-date" onChange={this.handleStartDate} value={this.state.startDate}></input>
            </div>
            <div className="check-out">
              <label>Check Out</label>
              <input type="date" className="end-date" onChange={this.handleEndDate} value={this.state.endDate}></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default BookingWidget;
