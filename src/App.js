import React, { Component } from 'react';
import AddProject from './components/AddProject';
import Projects from './components/Projects';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      projects: []
    }
  }
  componentWillMount() {
    this.setState({ projects: [
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
    ]});
  }

  render() {
    return (
      <div className="App">
        <AddProject />
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
