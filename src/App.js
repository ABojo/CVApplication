import { Component } from 'react';
import Navbar from './components/Navbar';
import styles from './styles/baseStyles.css';
import Form from './components/Form';
import createNewSection from './createNewSection';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inEditMode: true,
      generalSection: createNewSection('general'),
      eduSections: [createNewSection('edu')],
      jobSections: [createNewSection('job')],
    };
  }

  handleDelete = (section) => {
    const name = section.title === 'Education' ? 'eduSections' : 'jobSections';
    const index = this.state[name].indexOf(section);
    console.log(index);
    const newArray = this.state[name].splice(index, 1);

    this.setState({ name: newArray });
  };

  handleAdd = (type) => {
    if (type === 'Education') {
      this.setState({
        eduSections: [...this.state.eduSections, createNewSection('edu')],
      });
    } else {
      this.setState({
        jobSections: [...this.state.jobSections, createNewSection('job')],
      });
    }

    console.log(this.state);
  };

  handleChange = (newValue, section, fieldObj) => {
    const newState = { ...this.state };
    const { title } = section;

    if (title === 'General Information') {
      const name = 'generalSection';
      const fieldIndex = this.state[name].fields.indexOf(fieldObj);
      newState[name].fields[fieldIndex].value = newValue;
    } else if (title === 'Education' || title === 'Job Experience') {
      const name = title === 'Education' ? 'eduSections' : 'jobSections';
      const sectionIndex = this.state[name].indexOf(section);
      const fieldIndex = this.state[name][sectionIndex].fields.indexOf(
        fieldObj
      );
      newState[name][sectionIndex].fields[fieldIndex].value = newValue;
    }

    this.setState(newState);
  };

  handleModeChange = () => {
    const bool = this.state.inEditMode ? false : true;
    this.setState({ inEditMode: bool });
  };

  render() {
    const form = (
      <Form
        sections={this.state}
        onDelete={this.handleDelete}
        onAdd={this.handleAdd}
        onChange={this.handleChange}
      />
    );

    return (
      <div className="app">
        <Navbar faIcon="fas fa-scroll" title="CV Crafter" />
        {this.state.inEditMode ? form : ''}
      </div>
    );
  }
}

export default App;
