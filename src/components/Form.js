import { Component } from 'react';
import Input from './Input';
import styles from '../styles/formStyles.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="form">
        <h1 className="section-title">General Information</h1>
        <div className="general-grid">
          <Input
            faIcon="fas fa-user-friends"
            type="text"
            placeholder="First name"
            required
          />
          <Input
            faIcon="fas fa-user-friends"
            type="text"
            placeholder="Last name"
            required
          />
          <Input
            faIcon="fas fa-envelope"
            type="email"
            placeholder="Email"
            required
          />

          <Input
            faIcon="fas fa-mobile"
            type="tel"
            placeholder="Phone number"
            required
          />
        </div>
      </div>
    );
  }
}

export default Form;
