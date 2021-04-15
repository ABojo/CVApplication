import { Component } from 'react';
import Input from './Input';

class EducationSection extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="form-section">
        <h1 className="section-delete">
          <i className="fas fa-times-circle"></i>
        </h1>
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
            placeholder="Title of study"
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
