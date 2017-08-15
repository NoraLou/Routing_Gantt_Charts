import React, { Component } from 'react';
import ProjectsAPI from './util/ProjectsAPI'
import { Link } from 'react-router-dom'

//functional compoenet (rather than class.. cannot have state)
const SingleProject = (props) => {
  const singleProject = ProjectsAPI.get(
      parseInt(props.match.params.number, 10)
    )
    if (!singleProject) {
      return <div>Sorry but that project was not found</div>
    }
    return (
      <div>
        <h1>{singleProject.name}</h1>
        <h2>{singleProject.vertical}</h2>
        <Link to='/projects'>Back</Link>
      </div>
    )
}
export default SingleProject;