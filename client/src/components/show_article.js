import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/article_action';
import CommentForm from './comments/comment_form';
import Comments from './comments/comments';

class showArticle extends Component {

  componentWillMount() {
    if (this.props.articles.length == 0) {
      this.props.getArticles();
    }
  }

  render() {

    var data = {};
    this.props.articles.forEach(function(item) {
      if (this.props.params.id == item._id ) {
        data = {
          title: item.title,
          abstract: item.abstract,
          content: item.content,
          author: item.author,
          id: item._id
        }
        return data
      }
      return data
    }, this)

    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <strong>{data.title}</strong>
        <br></br>
        <br></br>
        <span className="pull-xs-center">{data.abstract}</span>
        <br></br>
        <br></br>
        <span className="pull-xs-center">{data.content}</span>
        <br></br>
        <br></br>
        <span className="pull-xs-center">{data.author}</span>
        <br></br>
        <br></br>
        <br></br>
        <strong>Comments:</strong>
        <br></br>
        <br></br>
        <div>
          <Comments id={data.id}/>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <strong>Add Comment</strong>
        <br></br>
        <br></br>
        <div>
          <CommentForm id={data.id}/>
        </div>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    articles: state.art
  };
}

export default connect(mapStateToProps,actions)(showArticle);
