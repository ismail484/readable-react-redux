import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import PostsPage from './components/posts/PostsPage'
import NewPostPage from './components/posts/NewPostPage'
import PostDetails from './components/posts/PostDetails'


export default (
   <Route exact path="/" component={App}>
    <Route path="/posts" component={PostsPage} >
      <Route path="/posts/new" component={NewPostPage} />
      <Route path="/posts/:id" component={PostDetails} />
    </Route>
   </Route>
);