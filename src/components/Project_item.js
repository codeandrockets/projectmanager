import React, { Component } from 'react';

class ProjectItem extends Component {
  render() {
  	console.log(this.props);
    return (
      <li className="Projectlist">
      	{this.props.project.title} - {this.props.project.category}
      </li>
    );
  }
}

export default ProjectItem;