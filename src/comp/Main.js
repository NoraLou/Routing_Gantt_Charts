import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'
import Manage from './Manage'

// statelsess functional componenet

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/projects' component={Projects}/>
      <Route path='/manage' component={Manage}/>
    </Switch>
  </main>
)

export default Main


