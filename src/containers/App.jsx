import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux'
import configureStore from '../store/index'

import 'bootstrap/dist/css/bootstrap.css';

import GridComponent from '../components/GridComponent.jsx';
import UserDetails from '../components/UserDetails.jsx';

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

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <div>
                <App />
                <Switch>
                    <Route path="/grid" component={GridComponent} />
                    <Route exact path="/details" component={UserDetails} />
                    <Route path="/details/:id" component={UserDetails} />
                </Switch>
            </div>
        </HashRouter>
    </Provider>,
    document.getElementById('app')
);

