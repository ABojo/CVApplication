import { Component } from 'react';
import styles from '../styles/switchStyles.css';

class Switch extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { checked, onModeChange } = this.props;
    return (
      <div class="switch-box">
        <h1 className="switch-heading">Edit Mode</h1>
        <label className="switch">
          <input type="checkbox" checked={checked} onClick={onModeChange} />
          <span className="slider round"></span>
        </label>
      </div>
    );
  }
}

export default Switch;
