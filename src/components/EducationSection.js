import { Component } from 'react';
import Input from './Input';
import styles from '../styles/formStyles.css';

class EducationSection extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="form-section">
        <h1 className="section-title">Education</h1>
        <div className="general-grid">
          <Input
            faIcon="fas fa-school"
            type="text"
            placeholder="School Name"
            required
          />
          <Input
            faIcon="fas fa-certificate"
            type="text"
            placeholder="Degree Awarded"
            required
          />
          <Input
            faIcon="fas fa-calendar-week"
            type="date"
            placeholder="Start of study"
            required
          />
          <Input
            faIcon="fas fa-calendar-week"
            type="date"
            placeholder="End of study"
            required
          />
        </div>
      </div>
    );
  }
}

export default EducationSection;
