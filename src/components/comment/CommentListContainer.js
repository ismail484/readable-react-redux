import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import * as postAction from '../../action/PostAction';
import PostList from '../post/PostList';



export class CommentListContainer extends React.Component {

    constructor() {
        super();

        this.state = {selectedPostId: undefined};

        this.handleAddPost = this.handleAddPost.bind(this);
        this.handleEditPost = this.handleEditPost.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleRowSelect = this.handleRowSelect.bind(this);
    }


    componentDidMount() {
        this.props.action.getPostsAction()
            .catch(error => {
                toastr.error(error);
            });
    }



    handleAddPost() {
        this.props.history.push('/post');
    }



    handleEditPost() {
        const selectedPostId = this.state.selectedPostId;

        if (selectedPostId) {
            this.setState({selectedPostId: undefined});            
            this.props.history.push(`/post/${selectedPostId}`);
        }        
    }



    handleDelete() {
        const selectedPostId = this.state.selectedPostId;

        if (selectedPostId) {
            this.setState({selectedPostId: undefined});                        
            this.props.action.deletePostAction(selectedPostId)
                .catch(error => {
                    toastr.error(error);
                });
        }
    }



    handleRowSelect(row, isSelected) {
        if (isSelected) {
            this.setState({selectedPostId: row.id});
        }
    }



    render() {
        const { posts } = this.props;
      console.log('posts:',posts)
      console.log('posts:',this.props.action)
        if (!posts) {
            return (
                <div>Loading...</div>
            );
        }

        return (
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col">
                        <h1>Posts</h1>                        
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col">
                        <div className="btn-group" role="group">
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={this.handleAddPost}
                            >
                                <i className="fa fa-plus" aria-hidden="true"/> New
                            </button>

                            <button
                                type="button"
                                className="btn btn-warning ml-2"
                                onClick={this.handleEditPost}                                
                            >
                                <i className="fa fa-pencil" aria-hidden="true"/> Edit
                            </button>                                

                            <button
                                type="button"
                                className="btn btn-danger ml-2"
                                onClick={this.handleDelete}
                            >
                                <i className="fa fa-trash-o" aria-hidden="true" onClick={this.handleDelete}/> Delete
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <PostList posts={posts} handleRowSelect={this.handleRowSelect}/>
                    </div>
                </div>
            </div>
        );
    }
}



const mapStateToProps = state => ({
    posts: state.postsReducer.posts
});



const mapDispatchToProps = dispatch => ({
    action: bindActionCreators(postAction, dispatch)

});



CommentListContainer.propTypes = {
    posts: PropTypes.array,
    action: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};



export default connect(mapStateToProps, mapDispatchToProps)(CommentListContainer);
