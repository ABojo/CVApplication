import { Component } from 'react';
import Input from './Input';
import TextArea from './TextArea';
import styles from '../styles/formStyles.css';

class GeneralSection extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="form-section">
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
          <TextArea placeholder="About me" required />
        </div>
      </div>
    );
  }
}

export default GeneralSection;
