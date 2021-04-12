import { Component } from 'react';
import styles from '../styles/navBarStyles.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  addIcon() {
    return <i className={`${this.props.faIcon} navbar-title-icon`}></i>;
  }

  render() {
    const { title, faIcon } = this.props;

    return (
      <div className="navbar">
        <h1 className="navbar-title">
          {faIcon ? this.addIcon() : ''}
          {title || 'Default Title'}
        </h1>
      </div>
    );
  }
}

export default Navbar;
