import { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/buttonStyles.css';
import EducationSection from './EducationSection';

class Button extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <button className="add-button">
        <i className="fas fa-plus button-icon"></i>Add {this.props.type}
      </button>
    );
  }
}

export default Button;
