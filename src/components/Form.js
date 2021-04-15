import React, { Component } from 'react';
import styles from '../styles/formStyles.css';
import Button from './Button';
import Section from './Section';

class Form extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  createSections(section) {
    return <Section section={section} />;
  }

  render() {
    const { generalSection, eduSections, jobSections } = this.props.sections;

    return (
      <form className="form">
        <Section section={generalSection} />
        {eduSections.map(this.createSections)}
        <Button type="Education" />
        {jobSections.map(this.createSections)}
        <Button type="Job" />
      </form>
    );
  }
}

export default Form;
