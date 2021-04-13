import { Component } from 'react';
import Input from './Input';
import TextArea from './TextArea';

class JobSection extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="form-section">
        <h1 className="section-delete">
          <i className="fas fa-times-circle"></i>
        </h1>
        <h1 className="section-title">Job Experience</h1>
        <div className="general-grid">
          <Input
            faIcon="fas fa-building"
            type="text"
            placeholder="Company Name"
            required
          />
          <Input
            faIcon="fas fa-briefcase"
            type="text"
            placeholder="Your position"
            required
          />
          <Input
            faIcon="fas fa-calendar-week"
            type="date"
            placeholder="Start date"
            required
          />
          <Input
            faIcon="fas fa-calendar-week"
            type="date"
            placeholder="End date"
            required
          />
          <TextArea placeholder="What did you do on the job?" required />
        </div>
      </div>
    );
  }
}

export default JobSection;
