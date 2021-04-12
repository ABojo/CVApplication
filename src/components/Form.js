import { Component } from 'react';
import Input from './Input';
import styles from '../styles/formStyles.css';
import GeneralSection from './GeneralSection';

class Form extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <form className="form">
        <GeneralSection />
      </form>
    );
  }
}

export default Form;
