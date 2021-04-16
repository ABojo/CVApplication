import { Component } from 'react';
import Input from './Input';
import TextArea from './TextArea';

class Section extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  buildInput = (f, i) => {
    const { section, onChange } = this.props;
    const { size, faIcon, placeholder, type, required, value } = f;
    if (size === 'small') {
      return (
        <Input
          key={i}
          faIcon={faIcon}
          placeholder={placeholder}
          type={type}
          required={required}
          value={value}
          onChange={onChange}
          section={section}
          fieldObject={f}
        />
      );
    } else {
      return (
        <TextArea
          key={i}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          section={section}
          fieldObject={f}
        />
      );
    }
  };

  render() {
    const { section } = this.props;
    const deleteButton = (
      <h1 className="section-delete" onClick={this.props.onDelete}>
        <i className="fas fa-times-circle"></i>
      </h1>
    );

    return (
      <div className="form-section">
        {section.optional ? deleteButton : ''}
        <h1 className="section-title">{section.title}</h1>
        <div className="general-grid">
          {section.fields.map(this.buildInput)}
        </div>
      </div>
    );
  }
}
export default Section;
