import React, { Component } from 'react';

class CommentArea extends Component {
  URL = 'https://striveschool-api.herokuapp.com/api/comments/';
  Token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlOGFhNDk0OTJlNDAwMTVlN2M2ZmIiLCJpYXQiOjE3NDM2ODYzMDgsImV4cCI6MTc0NDg5NTkwOH0.kBlmCYgV31lrscIJLi0iHXyw94vZ1o7T7ACBb9lgGS0';

  state = {
    comments:[],
  };

  componentDidMount = async () => {
    try {
        const elementId = this.props.elementId; 
        const response = await fetch(`${this.URL}${elementId}`, {
        headers: {
          Authorization: `Bearer ${this.Token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        this.setState({ comments: data });
      } else {
        console.error('Errore durante il recupero dei commenti');
      }
    } catch (error) {
      console.error('Errore durante la richiesta:', error);
    }
  };

  render() {
    return (
      <div>
        <h3>Commenti</h3>
        <ul>
          {this.state.comments.map((comment) => (
            <li key={comment._id}>
              <p>Commento: {comment.comment}</p>
              <p>Valutazione: {comment.rate}</p>
              <p>ID Libro: {comment.elementId}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CommentArea;