import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/comments_action';

class Comments extends Component {

  componentWillMount() {
    this.props.getComments(this.props.id);
  }

  render() {

    return (
      <div>
        <ul className='__list'>
          {this.props.comments.filter(item => item.articleId === this.props.id)
            .map((comment) => (
              <li key={comment._id}  className='__item'>
                  <strong className="pull-xs-center">{comment.name}</strong>
                  <span className="pull-xs-right">{comment.content}</span>
              </li>
            ))}
        </ul>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    comments: state.comments
  };
}

export default connect(mapStateToProps,actions)(Comments);
