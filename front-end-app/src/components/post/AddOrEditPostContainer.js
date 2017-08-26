import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import * as PostAction from '../../action/PostAction';
//import * as authorAction from '../../action/AuthorAction';
import PostForm from './PostForm'; // eslint-disable-line import/no-named-as-default
//import { authorsFormattedForDropdown } from '../../selectors/selectors'; // eslint-disable-line import/no-named-as-default


export class AddOrEditPostContainer extends React.Component {


    constructor() {
        super();
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }



    componentDidMount() {
        this.props.action.getPostAction(this.props.match.params.id)
            .catch(error => {
                toastr.error(error);
            });

        // this.props.action.getAuthorsAction()
        //     .catch(error => {
        //         toastr.error(error);
        //     });
    }



    handleSave(values) {
        const post = {
            id: values.id,
            title: values.title,
            watchHref: values.watchHref,
            authorId: values.authorId,
            length: values.length,
            category: values.category
        };

        this.props.action.savePostAction(post)
            .then(() => {
                toastr.success('Post saved');
                this.props.history.push('/posts');
            }).catch(error => {
                toastr.error(error);
            });
    }



    handleCancel(event) {
        event.preventDefault();
        this.props.history.replace('/posts');
    }



    render() {
        const { initialValues } = this.props;
        const heading = initialValues && initialValues.id ? 'Edit Post' : 'Add Post';

        return (
            <div className="container">
                <PostForm
                    heading={heading}
                    categories={this.props.categories}
                    handleSave={this.handleSave}
                    handleCancel={this.handleCancel}
                    initialValues={this.props.initialValues}
                />
            </div>
        );
    }
}



const mapStateToProps = (state, ownProps) => {
    const postId = ownProps.match.params.id; //from the path '/course/:id'

    if (postId && state.selectedPostReducer.post && postId === state.selectedPostReducer.post.id) {
        return {
            initialValues: state.selectedPostReducer.post,
           // authors: authorsFormattedForDropdown(state.authorReducer.authors)
        };
    } else {
        return {
          //  authors: authorsFormattedForDropdown(state.authorReducer.authors)
        };
    }
};



const mapDispatchToProps = dispatch => ({
      action: bindActionCreators({ ...PostAction }, dispatch)
    // action: bindActionCreators({ ...authorAction, ...courseAction }, dispatch)
});



AddOrEditPostContainer.propTypes = {
    action: PropTypes.object.isRequired,
    history: PropTypes.object,
  //  authors: PropTypes.array,
    initialValues: PropTypes.object,
    match: PropTypes.object.isRequired
};



export default connect(mapStateToProps, mapDispatchToProps)(AddOrEditPostContainer);
