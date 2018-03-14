import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      title: '',
      comment: '',
      tree_house_id: this.props.treeHouseId,
      user_id: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.errors = null;
  }

  componentDidMount() {
    const userId = this.props.session ? this.props.session.currentUser.id : null;
    debugger;
    this.setState({ user_id: userId});
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.title && this.state.comment) {
      const review = this.state;
      this.props.createReview(review);
      this.errors = false;
      this.setState({
        title: '',
        comment: ''
      });
    } else {
      this.errors = true;
      this.setState({
        title: '',
        comment: ''
      });
    }
  }

  renderErrors() {
    if (!this.state.title || !this.state.comment) {
      return(
        <div className="review-error">Empty title or comment!</div>
      );
    }
  }


  render() {

    return (
      <div className="review-form">
        <form onSubmit={this.handleSubmit} className="review-form-box">
          <h3 className="review-header">Write a review:</h3>
          {this.errors ? this.renderErrors() : <div></div>}
          <div className="review-form">
            <input
              type="text"
              placeholder="Title"
              value={this.state.title}
              onChange={this.update("title")}
              className="review-input"
              />
            <input
              type="text"
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
