import React, { Component } from 'react';
import Projects from './components/Projects';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      projects: [
        {
          title: 'Front-end dev',
          category: 'Web Dev'
        },
        {
          title: 'UX',
          category: 'Design'
        },
        {
          title: 'Server Adim',
          category: 'Dev ops'
        },
        {
          title: 'Copywriter',
          category: 'marketing'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
