import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import List from '../List';

import './index.scss';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <header className="app-header">
                        <span className="app-title">To Do List</span>
                    </header>
                    <section className="app-box-container">
                        <div className="app-box">
                            <Route exact path="/" component={List} />
                        </div>
                    </section>
                </div>
            </Router>
        );
    }
}

export default App;
