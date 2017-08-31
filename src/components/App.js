import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageNotFound from './common/PageNotFound';
import Home from './landing/Home';
import PostListContainer from './post/PostListContainer'; // eslint-disable-line import/no-named-as-default
import AddOrEditPostContainer from './post/AddOrEditPostContainer'; // eslint-disable-line import/no-named-as-default
import About from './About';
import createBrowserHistory from 'history/createBrowserHistory';
import HeaderNavContainer from './landing/HeaderNavContainer'; // eslint-disable-line import/no-named-as-default
import CommentListContainer from './comment/CommentListContainer';


const history = createBrowserHistory();


const App = () => {
    return (
        <div >
            <Router history={history}>
                <div>

                    <HeaderNavContainer />

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/posts" component={PostListContainer} />
                        <Route exact path="/post" component={AddOrEditPostContainer} />
                        <Route path="/post/:id" component={AddOrEditPostContainer} />
                        <Route path="/post/:id/comments" component={CommentListContainer} />
                        <Route path="/about" component={About} />
                        <Route component={PageNotFound} />
                    </Switch>

                </div>

            </Router>
        </div>
    );
};


export default App;