import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AllProjects from './AllProjects';
import SingleProject from './SingleProject';

class Projects extends Component {
  
  render() {    
    return (
      <div>
        <h1>This is the Projects Page</h1>
        <Switch>
        	<Route exact path='/projects' component={AllProjects}/>
        	<Route path='/projects/:number' component={SingleProject}/>
        </Switch>
      </div>
    );
  }

}

export default Projects;