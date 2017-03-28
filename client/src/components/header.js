import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class Header extends Component {

  renderLinks() {
    if (this.props.authenticated) {
      return [
            <li className="nav-item" key={0}>
                <Link className="nav-link" to="/signout">Sign Out</Link>
             </li>,
             <li className="nav-item" key={1}>
                <Link className="nav-link" to="/search">Search an Article</Link>
             </li>,
             <li className="nav-item" key={2}>
                <Link className="nav-link" to="/article">Save Articel</Link>
             </li>,
             <li className="nav-item" key={3}>
                <Link className="nav-link" to="/myprofil">My Profil</Link>
             </li>
           ]

    } else {
      return [
        <li className="nav-item" key={0}>
          <Link className="nav-link" to="/signin">Sign In</Link>
        </li>,
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>
      ]
    }
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <Link to="/" className="navbar-brand">Blog App</Link>
        <ul className="nav navbar-nav">
          {this.renderLinks()}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated : state.auth.authenticated
  };
}

export default connect(mapStateToProps, null)(Header);
