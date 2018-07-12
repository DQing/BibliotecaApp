import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './Home'

class App extends Component {
  render () {
    return (
      <div id='root'>
        <Router>
          <div>
            <Route exact path='/' component={Home} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
