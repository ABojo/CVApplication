import { Component } from 'react';
import Navbar from './components/Navbar';
import styles from './styles/baseStyles.css';
import Form from './components/Form';

class App extends Component {
  constructor(props) {
    super(props);

    this.generalSection = {
      title: 'General Information',
      optional: false,
      fields: [
        {
          size: 'small',
          faIcon: 'fas fa-user-friends',
          placeholder: 'First name',
          type: 'text',
          required: true,
          value: '',
        },
        {
          size: 'small',
          faIcon: 'fas fa-user-friends',
          placeholder: 'Last name',
          type: 'text',
          required: true,
          value: '',
        },
        {
          size: 'small',
          faIcon: 'fas fa-envelope',
          placeholder: 'Email',
          type: 'email',
          required: true,
          value: '',
        },
        {
          size: 'small',
          faIcon: 'fas fa-mobile',
          placeholder: 'Phone number',
          type: 'tel',
          required: true,
          value: '',
        },
        {
          size: 'big',
          placeholder: 'About me',
          required: true,
          value: '',
        },
      ],
    };

    this.eduSection = {
      title: 'Education',
      optional: true,
      fields: [
        {
          faIcon: 'fas fa-school',
          size: 'small',
          type: 'text',
          placeholder: 'School name',
          required: true,
          value: '',
        },
        {
          faIcon: 'fas fa-certificate',
          size: 'small',
          type: 'text',
          placeholder: 'Title of study',
          required: true,
          value: '',
        },
        {
          faIcon: 'fas fa-calendar-week',
          size: 'small',
          type: 'date',
          placeholder: 'Start of study',
          required: true,
          value: '',
        },
        {
          faIcon: 'fas fa-calendar-week',
          size: 'small',
          type: 'date',
          placeholder: 'End of study',
          required: true,
          value: '',
        },
      ],
    };

    this.jobSection = {
      title: 'Job Experience',
      optional: true,
      fields: [
        {
          faIcon: 'fas fa-building',
          size: 'small',
          type: 'text',
          placeholder: 'Comapny name',
          required: true,
          value: '',
        },
        {
          faIcon: 'fas fa-briefcase',
          size: 'small',
          type: 'text',
          placeholder: 'Your position',
          required: true,
          value: '',
        },
        {
          faIcon: 'fas fa-calendar-week',
          size: 'small',
          type: 'date',
          placeholder: 'Start date',
          required: true,
          value: '',
        },
        {
          faIcon: 'fas fa-calendar-week',
          size: 'small',
          type: 'date',
          placeholder: 'End date',
          required: true,
          value: '',
        },
        {
          size: 'big',
          placeholder: 'What did you do on the job?',
          required: true,
        },
      ],
    };

    this.state = {
      generalSection: { ...this.generalSection },
      eduSections: [{ ...this.eduSection }],
      jobSections: [{ ...this.jobSection }],
    };
  }

  handleDelete = (section) => {
    const name = section.title === 'Education' ? 'eduSections' : 'jobSections';
    const index = this.state[name].indexOf(section);
    const newArray = this.state[name].splice(index, 1);

    this.setState({ name: newArray });
  };

  handleAdd = (type) => {
    if (type === 'Education') {
      this.setState({
        eduSections: [...this.state.eduSections, { ...this.eduSection }],
      });
    } else {
      this.setState({
        jobSections: [...this.state.jobSections, { ...this.jobSection }],
      });
    }
  };

  render() {
    return (
      <div className="app">
        <Navbar faIcon="fas fa-scroll" title="CV Crafter" />
        <Form
          sections={this.state}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
        />
      </div>
    );
  }
}

export default App;
