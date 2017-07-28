import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import { createReview } from '../../util/review_api_util';

// need: tree_id, session

class ReviewForm extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      title: '',
      comment: '',
      tree_house_id: this.props.treeHouseId,
      user_id: this.props.session.currentUser.id,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.count = 0;
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = this.state;
    createReview(review);
    this.count++;
    
    this.setState({
      title: '',
      comment: ''
    });
  }

  renderErrors() {
    if (!this.state.title) {
      return(
        <div className="review-error">Empty title or comment!</div>
      );
    }
  }


  render() {

    return (
      <div className="review-form">
        <form onSubmit={this.handleSubmit} className="review-form-box">
          <h3 className="login-header">Write a review:</h3>
          {this.count !== 0 ? this.renderErrors() : <div></div>}
          <div className="signup-form">
            <input
              type="text"
              placeholder="Title"
              value={this.state.title}
              onChange={this.update("title")}
              className="review-input"
              />
            <input
              type="textarea"
              placeholder="Comment"
              value={this.state.comment}
              onChange={this.update("comment")}
              className="review-input"
              />

            <input type="submit" value="Submit" className="submit-button" />

          </div>
        </form>
      </div>
    );
  }
}

export default ReviewForm;
