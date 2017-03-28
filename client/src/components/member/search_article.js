import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/article_action';
import {Link} from 'react-router';

class SearchArticle extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  help() {
    this.props.getMyArticle(this.state.term)
  }

  renderTitle() {
    var title ='';
    if (this.props.myArticles.length != 0) {
        title = this.props.myArticles[0].title
    }
    return title;
  }

  renderAbstract() {
    var abstract = '';
    if (this.props.myArticles.length != 0) {
        abstract= this.props.myArticles[0].abstract;
    }
    return abstract;
  }

  renderId() {
    var id = '';
    if (this.props.myArticles.length != 0) {
        id= this.props.myArticles[0]._id;
    }
    return id;
  }

  renderLink() {
    var link;
    if (this.props.myArticles.length != 0) {
        link= <Link className="nav-link" to={"/clanok/" + this.renderId()}>Go to an Article</Link>
    }
    return link;
  }

  render() {

    return (
      <div>
        <div>
            <input
                onChange={event => this.setState({term: event.target.value})}
                type='text'
                placeholder='Add here Title'
            />
            <button onClick={this.help.bind(this)} className="btn btn-primary"> Search </button>
         </div>
         <div>
            <br></br>
            <br></br>
            <span><strong> {this.renderTitle()} </strong></span>
            <br></br>
            <br></br>
            <span>{this.renderAbstract()}</span>
            <br></br>
            {this.renderLink()}
         </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    myArticles: state.myart
  };
}

export default connect(mapStateToProps,actions)(SearchArticle);
