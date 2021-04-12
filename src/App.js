import { Component } from 'react';
import Navbar from './components/Navbar';
import styles from './styles/baseStyles.css';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar faIcon="fas fa-scroll" title="CV Crafter" />
        <Form />
      </div>
    );
  }
}

export default App;
