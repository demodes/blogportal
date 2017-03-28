import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions/article_action';

class PostArticle extends Component {

  static contextTypes = {
    router: React.PropTypes.object
  }

  handleFormSubmit(formProps) {
    this.props.postArticle(formProps);
    this.context.router.push('/');
    window.location.reload()
  }

  render() {
    const { handleSubmit, fields: {title, abstract, content, author } } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Title:</label>
          <input className="form-control" {...title}/>
          {title.touched && title.error && <div className="error">{title.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Abstract:</label>
          <textarea className="form-control" rows="5" cols="80" {...abstract}></textarea>
          {abstract.touched && abstract.error && <div className="error">{abstract.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Content:</label>
          <textarea className="form-control" rows="25" cols="80" {...content}></textarea>
          {content.touched && content.error && <div className="error">{content.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Author:</label>
          <input className="form-control" {...author}/>
          {author.touched && author.error && <div className="error">{author.error}</div>}
        </fieldset>
        <button action="submit" className="btn btn-primary">Save Article!</button>
      </form>
    );
  }
}

  function validate (formProps) {

    const errors = {};
    const stringEntirelyOfDigits = /^\d+$/;

      //mozeme tu pouzit forEach,reduce atd
    if (!formProps.title) {
      errors.title = 'Please enter a title';
    }

    if(stringEntirelyOfDigits.test(formProps.title)) {
      errors.title = 'Title should not consist entirely of digits';
    }

    if (!formProps.abstract) {
      errors.abstract = 'Please enter an abstract';
    }

    if(stringEntirelyOfDigits.test(formProps.abstract)) {
      errors.abstract = 'Abstract should not consist entirely of digits';
    }

    if(!formProps.content) {
      errors.content = 'Please enter a content';
    }

    if(stringEntirelyOfDigits.test(formProps.content)) {
      errors.content = 'Content should not consist entirely of digits';
    }

    if(!formProps.author) {
      errors.author = 'Please enter an author';
    }

    if(stringEntirelyOfDigits.test(formProps.author)) {
      errors.author = 'Author should not consist entirely of digits';
    }

    return errors;
  }

export default reduxForm({
  form: 'postarticle',
  fields: ['title', 'abstract', 'content', 'author'],
  validate: validate
},null,actions)(PostArticle);
