import React, { Component } from 'react'
import api from '../services/api';

import './newcomment.css';

class NewComment extends Component {
  constructor(props) {
    super();
    this.state = {
      idPost: props.idComment,
      name: '',
      comment: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
  
    const { idPost } = this.state;
    const data = {
      name: this.state.name,
      comment: this.state.comment
    }

    await api.post(`posts/${idPost}/comment`, data);


  }

  handleImageChange = e => {
    this.setState({ image: e.target.files[0] });
  }

  renderChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form id="new-comment" onSubmit={this.handleSubmit}>

        <input 
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={this.renderChange}
          value={this.state.name}
        />
        <textarea
          type="text"
          name="comment"
          placeholder="Write your comment where"
          onChange={this.renderChange}
          value={this.state.comment}
        />

        <button type="submit">Comment</button>
      </form>
    )
  }
}

export default NewComment;