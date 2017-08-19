import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { createPostSuccess,updatePostSuccess,deletePostSuccess,createCommentSuccess,updateCommentSuccess,deleteCommentSuccess } from '../actions'
import CalendarIcon from 'react-icons/lib/fa/calendar-plus-o'
import Modal from 'react-modal'
import ArrowRightIcon from 'react-icons/lib/fa/arrow-circle-right'
import Loading from 'react-loading'
import {Link} from 'react-router-dom'
import {PropTypes} from 'react'
//import PostForm from './PostForm'
//import CommentForm from './CommentForm'
import Header from './common/Header'
import { withRouter } from 'react-router-dom'


class App extends Component {
  
  render() {
  

    console.log('Props',this.props)
  console.log('children',this.props.children)
    

    return (
    
     <div className="container-fluid">
        <Header />
        {this.props.children}
     </div>

         
  
    )
}

}

 App.propTypes = {
  children: PropTypes.object.isRequired
 }
export default App
  


// //to acces state from store
// //it takes reducers as an object
// function mapStateToProps ({ post, comment }) {
  
//   const postOrder = ['8xf0y6ziyjabvozdd253nd', '6ni6ok3ym7mf1p33lnez', '8xf0y6ziyjabvozdd253ne', '6ni6ok3ym7mf1p33lnef']
//   const commentOrder = ['894tuq4ut84ut8v4t8wun89g', '8tu4bsun805n8un48ve89']
//   return{

// post:postOrder.map ((post)=>({
// post,


// })),
// comment:commentOrder.map ((comment)=>({
// comment,


// }))

//   }
  
  
// }

// function mapDispatchToProps (dispatch) {
//   return {
//     createPost: (data) => dispatch(createPostSuccess(data)),
//     updatePost: (data) => dispatch(updatePostSuccess(data)),
//     deletePost: (data) => dispatch(deletePostSuccess(data)),
//     createComment: (data) => dispatch(createCommentSuccess(data)),
//     updateComment: (data) => dispatch(updateCommentSuccess(data)),
//     deleteComment: (data) => dispatch(deleteCommentSuccess(data))
//   }
// }

// //connect reduy store to my Component APP
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App)
