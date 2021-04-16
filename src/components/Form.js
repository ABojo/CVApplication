import React, { Component } from 'react';
import styles from '../styles/formStyles.css';
import Button from './Button';
import Section from './Section';

class Form extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  createSections = (section, i) => {
    const { onDelete, onChange } = this.props;
    return (
      <Section
        key={i}
        section={section}
        onDelete={() => onDelete(section)}
        onChange={onChange}
      />
    );
  };

  render() {
    const { generalSection, eduSections, jobSections } = this.props.sections;
    const { onAdd, onChange } = this.props;
    return (
      <form className="form">
        <Section section={generalSection} onChange={onChange} />
        {eduSections.map(this.createSections)}
        <Button type="Education" onAdd={onAdd} />
        {jobSections.map(this.createSections)}
        <Button type="Job" onAdd={onAdd} />
      </form>
    );
  }
}

export default Form;
