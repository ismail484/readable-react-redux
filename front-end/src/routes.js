import React from 'react';
import { Route,Switch } from 'react-router-dom';
import App from './components/App';
import HomePage from './components/home/HomePage'
import PostsPage from './components/posts/PostsPage'
import NewPostPage from './components/posts/NewPostPage'
import PostDetails from './components/posts/PostDetails'
import About from './components/About'

export default (
  <Switch>
   <Route exact path="/" component={App} />
    <Route path="/about" component={About} />
    <Route exact path="/posts" component={PostsPage} />
    <Route path="/posts/new" component={NewPostPage} />
    <Route path="/posts/:id" component={PostDetails} />
   
   </Switch>
);