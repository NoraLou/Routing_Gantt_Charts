import React, { Component } from 'react';
import ProjectsAPI from './util/ProjectsAPI';
import { Link } from 'react-router-dom';


class AllProjects extends Component {
	
  render() {    
    return (
      <div>
        {
        	ProjectsAPI.all().map( p => (
            <li key={p.number}>
              <Link to={`/projects/${p.number}`}>{p.name}</Link>
            </li>
        	))
        }
      </div>
    );
  }
}

export default AllProjects;