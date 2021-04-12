import { Component } from 'react';
import styles from '../styles/inputStyles.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  showValidity(event) {
    const input = event.target;

    if (input.checkValidity()) {
      input.classList.add('valid');
      input.classList.remove('invalid');
    } else {
      input.classList.add('invalid');
      input.classList.remove('valid');
    }
  }

  buildInput() {
    return (
      <input
        type={this.props.type}
        placeholder={this.props.placeholder}
        className={`input-field ${this.props.faIcon ? 'has-icon' : ''}`}
        required={this.props.required ? true : ''}
        onBlur={this.showValidity}
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
