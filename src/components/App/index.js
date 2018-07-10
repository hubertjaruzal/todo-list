import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import List from '../List';
import FormAdd from '../Form/Add';
import FormEdit from '../Form/Edit';

import './index.scss';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <div className="app-box">
                        <header className="app-header">
                            <span className="app-title">Your<br/>Things</span>
                        </header>
                        <Route exact path="/" component={List} />
                        <Route exact path="/add" component={FormAdd} />
                        <Route exact path="/edit/:id" component={FormEdit} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
