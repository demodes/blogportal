import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/auth_action';

class Signout extends Component {

  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
    return (
      <div>
        Hope, we will see soon...
      </div>
    )
  }
}

export default connect(null, actions)(Signout);
