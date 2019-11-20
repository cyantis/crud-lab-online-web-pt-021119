import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state ={
    text: '',
    restaurantId: this.props.restaurant.id
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addReview(this.state)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <input type="text" onChange={event => this.handleOnChange(event)} value={this.state.text}></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
