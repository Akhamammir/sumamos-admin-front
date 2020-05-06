import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import 'rsuite/dist/styles/rsuite-default.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
const App = () => {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/login' render={(props) => <Login {...props} />} />
          <Route
            path='/dashboard'
            render={(props) => <Dashboard {...props} />}
          />
          <Route exact path='/' render={() => <Redirect to='/dashboard' />} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
