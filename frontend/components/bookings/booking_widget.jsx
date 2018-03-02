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
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    if (!this.state.fixed && window.scrollY >= 450) {
      this.setState({fixed: true});
    } else if (this.state.fixed && window.scrollY < 450) {
      this.setState({fixed: false});
    }
  }

  render() {

    let fixed = this.state.fixed ? ("widget-fixed") : ("");

    return(
      <div className={`booking-widget ${fixed}`}>
        <div>TEXT TEXT TEXT TEXT TEXT TEXT</div>
      </div>
    );
  }
}

export default BookingWidget;
