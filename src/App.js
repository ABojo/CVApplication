import { Component } from 'react';
import Navbar from './components/Navbar';
import styles from './styles/baseStyles.css';

class App extends Component {
  render() {
    return <Navbar faIcon="fas fa-scroll" title="CV Crafter" />;
  }
}

export default App;
