import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'
import {loadPosts} from './actions/postsAction'
import {loadComments} from './actions/commentsAction'
import {BrowserRouter} from 'react-router-dom'
import configureStore from './store/configureStore'
import routes from './routes'
import createBrowserHistory from 'history/createBrowserHistory'
//import {hashHistory} from 'react-router'


//create history object
const history = createBrowserHistory();




const store = configureStore();

// 1. Call dispatch on the store with an argument of this action that makes an API request
// 2. The loadPosts() action is invoked, which makes an API call, and dispatches the loadPostsSuccess action
// 3. that action: store -> root reducer -> posts reducer
// 4. posts reducer handles that action, recieves course payload and return new state that has posts: posts payload
// 5. the PostsPage component is connected to the store, so store's new state triggers the mapStateToProps function, which triggers the render function on that component
store.dispatch(loadPosts());
store.dispatch(loadComments());

//pass store to provider component
ReactDOM.render(
  <BrowserRouter  history={history}>
   <Provider store={store}>
     <App >{routes} </App >
   </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()


