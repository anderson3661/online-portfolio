import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './components/nav/routes';

import './App.css';

class App extends Component {

    render() {
        return (
            <Router>
                <div className="outer-container">
                    <Routes />
                </div>                   
            </Router>
        );
    }
}

export default App;