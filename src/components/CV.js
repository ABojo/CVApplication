import React, { Component } from 'react';
import styles from '../styles/cvStyles.css';
import profileImage from '../img/profile.png';

class CV extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  getValues = (array) => array.map((obj) => obj.value);

  buildList = (section) => {
    let text = '';

    if (section.title === 'Education') {
      let [schoolName, titleOfStudy, startDate, endDate] = this.getValues(
        section.fields
      );

      text = `${titleOfStudy || 'Studied'} at ${schoolName || 'school'} from ${
        startDate || '?'
      } until ${endDate || '?'}`;
    } else {
      let [company, pos, start, end] = this.getValues(section.fields);

      text = `${pos || 'Worked'} at ${company || 'company'} from ${
        start || '?'
      } until ${end || '?'}`;
    }

    return (
      <div className="cv-list-item" key={section.id}>
        <i className="far fa-circle cv-list-item__dot"></i>
        <p className="cv-list-item__text">{text}</p>
      </div>
    );
  };

  render() {
    const { generalSection, eduSections, jobSections } = this.props.state;
    const [name, profession, email, phoneNumber, description] = this.getValues(
      generalSection.fields
    );

    const cvHeader = (
      <div className="cv-section cv-header">
        <img className="cv-image" src={profileImage} alt="CV"></img>
        <div className="cv-personal">
          <h1 className="cv-name">
            <i className="fas fa-user-alt cv-icon"></i>
            {name || 'No Name'}
          </h1>
          <h1 className="cv-general-item">
            <i className="fas fa-briefcase cv-icon"></i>
            {profession || 'No profession'}
          </h1>
          <h1 className="cv-general-item">
            <i className="fas fa-envelope cv-icon"></i>
            {email || 'No email'}
          </h1>
          <h1 className="cv-general-item">
            <i className="fas fa-phone cv-icon"></i>
            {phoneNumber || 'No phone number'}
          </h1>
        </div>
      </div>
    );

    const cvDescription = (
      <div className="cv-section">
        <h1 className="cv-section__heading">
          <i className="fas fa-comment-alt cv-heading-icon"></i>Who am I?
        </h1>
        <p className="cv-description">{description}</p>
      </div>
    );

    const cvEducation = (
      <div className="cv-section">
        <h1 className="cv-section__heading">
          <i className="fas fa-graduation-cap cv-heading-icon"></i>Education
        </h1>

        {eduSections.map(this.buildList)}
      </div>
    );

    const cvJob = (
      <div className="cv-section">
        <h1 className="cv-section__heading">
          <i className="fas fa-briefcase cv-heading-icon"></i>Job Experience
        </h1>

        {jobSections.map(this.buildList)}
      </div>
    );

    return (
      <div className="cv-box">
        {cvHeader}
        {description ? cvDescription : ''}
        {eduSections.length > 0 ? cvEducation : ''}
        {jobSections.length > 0 ? cvJob : ''}
      </div>
    );
  }
}

export default CV;
