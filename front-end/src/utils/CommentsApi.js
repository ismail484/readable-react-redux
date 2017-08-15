class CommentsApi {
  static getAllComments() {
    return fetch('http://localhost:5001/posts/:id/comments').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static updateComment(comment) {
    const request = new Request(`http://localhost:5001/posts/:id/comments/${comment.id}`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({comment: comment})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createComment(comment) {
    const request = new Request('http://localhost:5001/posts/:id/comments', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({comment: comment})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static deleteComment(comment) {
    const request = new Request(`http://localhost:5001/posts/:id/comments/${comment.id}`, {
      method: 'DELETE'
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default CommentsApi;
