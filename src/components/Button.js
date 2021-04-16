import { Component } from 'react';
import styles from '../styles/buttonStyles.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  onClick = (e) => {
    e.preventDefault();

    const { onAdd, type } = this.props;
    onAdd(type);
  };

  render() {
    const { type } = this.props;
    return (
      <button className="add-button" onClick={this.onClick}>
        <i className="fas fa-plus button-icon"></i>Add {type}
      </button>
    );
  }
}

export default Button;
