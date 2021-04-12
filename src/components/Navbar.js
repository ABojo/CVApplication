import { Component } from 'react';
import styles from '../styles/navBarStyles.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="navbar">
        <h1 class="navbar-title">
          <i className="fas fa-scroll navbar-title-icon"></i>
          {this.props.title}
        </h1>
      </div>
    );
  }
}

export default Navbar;
