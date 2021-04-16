import Input from './Input';

class TextArea extends Input {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { placeholder, required, value } = this.props;

    return (
      <div className="input-container big">
        <textarea
          placeholder={placeholder}
          className="input-field"
          required={required ? true : ''}
          onBlur={this.showValidity}
          value={value}
          onChange={this.handleChange}
        ></textarea>
        <h1 className="field-label">{placeholder}</h1>
      </div>
    );
  }
}

export default TextArea;
