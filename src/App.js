import { Component } from 'react';
import Navbar from './components/Navbar';
import styles from './styles/baseStyles.css';
import Form from './components/Form';

class App extends Component {
  constructor(props) {
    super(props);
    const generalSection = {
      title: 'General Information',
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

    const educationSection = {
      title: 'Education',
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

    const jobSection = {
      title: 'Job Experience',
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
          requried: true,
        },
      ],
    };

    this.state = {
      generalSection: generalSection,
      educationSections: [educationSection],
      jobSections: [jobSection],
    };
  }

  render() {
    return (
      <div className="app">
        <Navbar faIcon="fas fa-scroll" title="CV Crafter" />
        <Form sections={this.state} />
      </div>
    );
  }
}

export default App;
