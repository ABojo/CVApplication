import React, { Component } from 'react';
import styles from '../styles/formStyles.css';
import Button from './Button';
import Section from './Section';

class Form extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { generalSection, eduSections, jobSections } = this.props.sections;

    return (
      <form className="form">
        <Section section={generalSection} />
        {eduSections.map((section) => (
          <Section section={section} />
        ))}
        <Button type="Education" />
        {jobSections.map((section) => (
          <Section section={section} />
        ))}
        <Button type="Job" />
      </form>
    );
  }
}

export default Form;
