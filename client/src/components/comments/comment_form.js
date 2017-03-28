import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions/comments_action';
import { browserHistory } from 'react-router';

class CommentForm extends Component {

  handleFormSubmit(formProps) {
    this.props.postComment(formProps, this.props.id);
    window.location.reload()
  }

  render() {

    const { handleSubmit, fields: {name, content } } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Name:</label>
          <input className="form-control" {...name}/>
          {name.touched && name.error && <div className="error">{name.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Comment:</label>
          <textarea className="form-control" rows="5" cols="80" {...content}></textarea>
          {content.touched && content.error && <div className="error">{content.error}</div>}
        </fieldset>
        <button action="submit" className="btn btn-primary">Save Comment !</button>
      </form>
    );
  }
}

  function validate (formProps) {
    const errors = {};

    if (!formProps.name) {
      errors.name = 'Please enter a name';
    }

    if (!formProps.content) {
      errors.content = 'Please enter a comment';
    }

    return errors;
  }

export default reduxForm({
  form: 'commentform',
  fields: ['name', 'content'],
  validate: validate
},null,actions)(CommentForm);
