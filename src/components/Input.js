import { Component } from 'react';
import styles from '../styles/inputStyles.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  buildInput() {
    return (
      <input
        type={this.props.type}
        placeholder={this.props.placeholder}
        className={`input-field ${this.props.faIcon ? 'icon' : ''}`}
        required={this.props.required ? true : ''}
      ></input>
    );
  }

  buildWithIcon() {
    return (
      <div className="input-container">
        <i class={`${this.props.faIcon} input-icon`}></i>
        {this.buildInput()}
      </div>
    );
  }

  render() {
    if (this.props.faIcon) return this.buildWithIcon();

    return this.buildInput();
  }
}

export default Input;
