import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import * as postAction from '../../action/PostAction';
import * as categoryAction from '../../action/CategoryAction';
import PostForm from './PostForm'; // eslint-disable-line import/no-named-as-default
import { categoriesFormattedForDropdown } from '../../selectors/selectors'; // eslint-disable-line import/no-named-as-default


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

        this.props.action.getCategoriesAction()
            .catch(error => {
                toastr.error(error);
            });
    }



    handleSave(values) {
        const post = {
            id: values.id,
            title: values.title,
            timestamp: values.timestamp,
            author: values.author,
            category: values.category,
            body: values.body,       
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
        const heading = initialValues && initialValues.id ? 'Edit' : 'Add';
        
        console.log('categories are' ,this.props.categories)

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
            categories: categoriesFormattedForDropdown(state.categoriesReducer.categories)
        };
    } else {
        return {
          categories: categoriesFormattedForDropdown(state.categoriesReducer.categories)
        };
    }
};



const mapDispatchToProps = dispatch => ({
    //  action: bindActionCreators({ ...postAction }, dispatch)
     action: bindActionCreators({ ...categoryAction, ...postAction }, dispatch)
});



AddOrEditPostContainer.propTypes = {
    action: PropTypes.object.isRequired,
    history: PropTypes.object,
    categories: PropTypes.array,
    initialValues: PropTypes.object,
    match: PropTypes.object.isRequired
};



export default connect(mapStateToProps, mapDispatchToProps)(AddOrEditPostContainer);
