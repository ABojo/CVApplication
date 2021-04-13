import { Component } from 'react';
import Input from './Input';
import styles from '../styles/formStyles.css';
import GeneralSection from './GeneralSection';
import EducationSection from './EducationSection';

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
      </form>
    );
  }
}

export default Form;
