import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions/auth_action';

class Signup extends Component {

  handleFormSubmit(formProps) {
    this.props.signupUser(formProps);
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>ejj !</strong>
          {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, fields: {email, password, passwordConfirm } } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <input className="form-control" {...email}/>
          {email.touched && email.error && <div className="error">{email.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control" {...password}/>
          {password.touched && password.error && <div className="error">{password.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm Password:</label>
          <input type="password" className="form-control" {...passwordConfirm}/>
          {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign Up!</button>
      </form>
    );
  }
}

function validate(formProps) {
    const errors = {};
    const stringEntirelyOfDigits = /^\d+$/;
    const stringOfNumbersAndLetters = /.*?(?:[a-z].*?[0-9]|[0-9].*?[a-z]).*?/;

      //mozeme tu pouzit forEach,reduce atd
    if (!formProps.email) {
      errors.email = 'Please enter an email';
    }

    if(stringEntirelyOfDigits.test(formProps.email)) {
      errors.email = 'email should not consist entirely of digits';
    }

    if (!formProps.password) {
      errors.password = 'Please enter a password';
    }

    if(!stringOfNumbersAndLetters.test(formProps.password)) {
      errors.password = 'password should contain letters and numbers';
    }

    if(!formProps.passwordConfirm) {
      errors.passwordConfirm = 'Please enter a password confirmation';
    }

    if(!stringOfNumbersAndLetters.test(formProps.passwordConfirm)) {
      errors.passwordConfirm = 'password should contain letters and numbers';
    }

    if (formProps.password !== formProps.passwordConfirm) {
      errors.password = 'Password must match';
    }

    return errors;
}


function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error
  };
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate: validate
},mapStateToProps,actions)(Signup);
