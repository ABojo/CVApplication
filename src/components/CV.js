import React, { Component } from 'react';
import styles from '../styles/cvStyles.css';
import profileImage from '../img/profile.png';

class CV extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { generalSection, eduSections, jobSections } = this.props.state;
    const generalFields = generalSection.fields;

    return (
      <div class="cv-box">
        <div className="cv-header">
          <img className="cv-image" src={profileImage} alt="CV"></img>
          <div class="cv-personal">
            <h1 className="cv-name">
              <i class="fas fa-user-alt cv-icon"></i>
              {generalFields[0].value && generalFields[1].value
                ? `${generalFields[0].value} ${generalFields[1].value}`
                : 'No Name'}
            </h1>
            <h1 className="cv-general-item">
              <i class="fas fa-envelope cv-icon"></i>
              {generalFields[2].value || 'No email'}
            </h1>
            <h1 className="cv-general-item">
              <i class="fas fa-phone cv-icon"></i>
              {generalFields[3].value || 'No phone nubmer'}
            </h1>
            <h1 className="cv-general-item">
              <i class="far fa-comment-alt cv-icon"></i>
              {generalFields[4].value || 'No description'}
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default CV;
