import React from 'react'
import { Form, Text } from 'react-form'
import {Input, TextArea, GenericInput} from 'react-text-input'

class  CommentForm extends React.Component({}) {

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


          <Textarea 
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

export default CommentForm;



















export default function CommentForm ({ list }) {
  return (
    <div className="comment" >
  <form >

    <label >Author</label>
    <input className="input" type="text"  name="author" placeholder="Your name.." />


    <label >Body</label>
    <textarea name="body" placeholder="Write something.." style="height:200px"></textarea>

    


    <input type="submit" className="input"  value="Submit" /> 

  </form>
</div>
  )
}