import { Component } from 'react';
import styles from '../styles/formStyles.css';
import GeneralSection from './GeneralSection';
import EducationSection from './EducationSection';
import JobSection from './JobSection';
class Form extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <form className="form">
        <GeneralSection />
        <EducationSection />
        <JobSection />
      </form>
    );
  }
}

export default Form;
