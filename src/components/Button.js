import { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/buttonStyles.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { onAdd, type } = this.props;
    return (
      <button className="add-button" onClick={() => onAdd(type)}>
        <i className="fas fa-plus button-icon"></i>Add {type}
      </button>
    );
  }
}

export default Button;
