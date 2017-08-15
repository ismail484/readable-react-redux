import React from 'react'
import {Input, TextArea, GenericInput} from 'react-text-input'
import TextInput from '../common/TextInput'
import Dropdown from 'react-dropdown'

class  PostForm extends React.Component {

  render (){
  const categories = [
  { value: 'react', label: 'React' },
  { value: 'redux', label: 'Redux' },
  { value: 'udacity', label: 'Udacity' },]

  return (
    <div className="post" >
        <form>
          <TextInput
            name="author"
            label="Author"
            placeholder="Your name.."
            value={this.props.post.author}
            onChange={this.props.onChange}/>


          <TextInput
            name="title"
            label="Title"
            value={this.props.post.title}
            onChange={this.props.onChange}/>
           
          
          <Dropdown 
            options={categories} 
            //onChange={this._onSelect}
            onChange={this.props.onChange}
            value='redux' 
            placeholder="Select an option"
            label="Categories" />

          <TextArea 
          id="noter-text-area" 
          name="body" 
          value={this.props.post.body}
          label="Body"
          placeholder='Type a post'/>

          <input
            type="submit"
            disabled={this.props.saving}
            value={this.props.saving ? 'Saving...' : 'Save'}
            className="btn btn-primary"
            onClick={this.props.onSave}/>
        </form>
      </div>
  
  )

}
}

PostForm.propTypes = {
  post: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool
};


export default PostForm;
