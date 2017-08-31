import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import FieldInput from '../common/FieldInput';
import DatePicker from 'react-datepicker';
import SelectInput from '../common/SelectInput';
import moment from 'moment'
import {OverlayTrigger, Tooltip} from 'react-bootstrap'
import DateTimeField from '../common/DateTimeField'


export const PostForm = ({ handleSubmit, pristine, reset, submitting, heading, categories, handleSave, handleCancel }) => {
    return (
        <form onSubmit={handleSubmit(handleSave)}>
            <h1>{heading}</h1>

            <Field
                type="text"
                name="title"
                label="Title"
                placeholder="Title of the post"
                component={FieldInput}
            />

            <Field
                name="category"
                label="Categories"
                options={categories}
                component={SelectInput}
            />

            <Field
                type="text"
                name="author"
                label="Author"
                placeholder="Category of the post"
                component={FieldInput}
            />
        

            <Field
                type="text"
                name="body"
                label="Body"
                placeholder="body of post "
                component={FieldInput}
            />
             <Field
                 name='startDate'
                 label='Event Start Date/Time'
                 component={DateTimeField}
            />
          


            <div>
                <button type="submit" disabled={submitting} className="btn btn-primary"><i className="fa fa-paper-plane-o" aria-hidden="true" /> Submit</button>

                {heading === 'Add' && <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-default btn-space">Clear Values</button>}

                <button type="button" className="btn btn-default btn-space" onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    );
};





const validate = values => {
    const errors = {};

    if (!values.title) {
        errors.title = 'Required';
    }

    if (!values.category) {
        errors.category = 'Required';
    }

    if (!values.author) {
        errors.author = 'Required';
    }

    if (!values.body) {
        errors.body = 'Required';
    }

    return errors;
};



PostForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    heading: PropTypes.string.isRequired,
    categories: PropTypes.array.isRequired,
    handleSave: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired
};



export default reduxForm({
    form: 'PostForm',
    validate
})(PostForm);
