import React from 'react';
import ReactDOM from 'react-dom';

class Review extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      name: '',
      photo: ''
    };
  }

  componentDidMount() {
    const review = this.props.review;

    this.props.fetchUser(review.user_id).then( user =>
      this.setState({
        name: user.user.full_name,
        photo: user.user.image_url
      })
    );
  }

  render() {
    const review = this.props.review;

    if (this.state.name) {
      return(
        <div className="review-item">
          <div className="reviewer-profile">
            {this.state.name}
            <img className='reviewer-photo' src={this.state.photo}></img>
          </div>
          <div className="review-container">
            <h2>{review.title}</h2>
            {review.comment}
          </div>
        </div>
      );
    } else {
      return(
        <div>Fails</div>
      );
    }
  }

}

export default Review;
