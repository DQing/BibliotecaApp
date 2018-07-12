import React, {Component} from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Home from './Home'
import Book from './Book'
import Menu from './Menu'
class App extends Component {
    render() {
        return (
            <div id='root'>
                <Router>
                    <div>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/books' component={Book}/>
                        <Route exact path='/menu' component={Menu}/>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App
