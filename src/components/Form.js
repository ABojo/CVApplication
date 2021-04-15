import { Component } from 'react';
import styles from '../styles/formStyles.css';
import GeneralSection from './GeneralSection';
import EducationSection from './EducationSection';
import JobSection from './JobSection';
import Button from './Button';

class Form extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
  }

  render() {
    return (
      <form className="form">
        <GeneralSection name="generalSection" />
        <EducationSection />
        <Button type="Education" />
        <JobSection />
        <Button type="Job" />
      </form>
    );
  }
}

export default Form;
