import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/article_action';
import {Link} from 'react-router';
import { browserHistory } from 'react-router';

class Articles extends Component {

  componentWillMount() {
    this.props.getArticles();
  }

  render() {
    return (
    <div>
      <ul className='__list'>
        {this.props.articles.map((item) => (
            <li key={item._id}  className='__item'>
              <Link to={"/clanok/" + item._id}>
                <strong className="pull-xs-center">{item.title}</strong>
                <span className="pull-xs-right">{item.abstract}</span>
              </Link>
            </li>
          ))}
      </ul>
    </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    articles: state.art
  };
}

export default connect(mapStateToProps,actions)(Articles);
