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

  render() {
    const { faIcon, type, placeholder, required, value } = this.props;

    return (
      <div className="input-container">
        {faIcon ? <i className={`${faIcon} input-icon`}></i> : ''}

        <input
          type={type}
          placeholder={placeholder}
          className={`input-field ${faIcon ? 'has-icon' : ''}`}
          required={required ? true : ''}
          onBlur={this.showValidity}
          value={value}
        ></input>

        <h1 className="field-label">{placeholder}</h1>
      </div>
    );
  }
}

export default Input;
