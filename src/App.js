import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './logo.svg'
import Navigation from './components/navigation'
import About from './pages/about'
import Projects from './pages/projects'
import Research from './pages/research'
import './App.css'


class App extends Component {
  render() {
    return (
      <div className="app_containter">
        <Router>
          <div className="app_inner">
            <Navigation />
            <div className="app_content">
              <Route path="/about" component={About} />
              <Route path="/research" component={Research} />
              <Route path="/projects" component={Projects} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
