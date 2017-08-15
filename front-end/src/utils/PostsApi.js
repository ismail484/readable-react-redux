
class PostsApi {
  static getAllPosts() {
    return fetch('http://localhost:5001/posts').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static updatePost(post) {
    const request = new Request(`http://localhost:5001/posts/${post.id}`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({post: post})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createPost(post) {
    const request = new Request('http://localhost:5001/posts/', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({post: post})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static deletePost(post) {
    const request = new Request(`http://localhost:5001/posts/${post.id}`, {
      method: 'DELETE'
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default PostsApi;
