import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import GridComponent from './GridComponent.jsx';
import UserDetails from './UserDetails.jsx';

const App = ({ children }) => (
    <div>
        <h1>Our awesome app</h1>
        <ul role="nav">
            <li><Link to="/grid">Grid</Link></li>
            <li><Link to="/details">Details</Link></li>
        </ul>
        {children}
    </div>
);

ReactDOM.render(
    <HashRouter>
        <div>
            <App />
            <Switch>
                <Route path="/grid" component={GridComponent} />
                <Route exact path="/details" component={UserDetails} />
                <Route path="/details/:id" component={UserDetails} />
            </Switch>
        </div>
    </HashRouter>,
    document.getElementById('app')
);

