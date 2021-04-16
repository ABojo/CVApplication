import React, { Component } from 'react';
import styles from '../styles/formStyles.css';
import Button from './Button';
import Section from './Section';
import uniqid from 'uniqid';

class Form extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  createSections = (section) => {
    const { onDelete } = this.props;
    return (
      <Section
        key={uniqid()}
        section={section}
        onDelete={() => onDelete(section)}
      />
    );
  };

  render() {
    const { generalSection, eduSections, jobSections } = this.props.sections;
    const { onAdd } = this.props;
    return (
      <form className="form">
        <Section section={generalSection} />
        {eduSections.map(this.createSections)}
        <Button type="Education" onAdd={onAdd} />
        {jobSections.map(this.createSections)}
        <Button type="Job" onAdd={onAdd} />
      </form>
    );
  }
}

export default Form;
