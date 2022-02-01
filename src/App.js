import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from '../src/components/home/home';
import About from '../src/components/aboutus/about';
import Contact from '../src/components/contact/contact';
import "../src/components/contact/contact.css"
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Routes>
            <Route exact path='/' element={< Home />}/>
            <Route exact path='/about-us' element={< About />}/>
            <Route exact path='/contact' element={< Contact />}/>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;