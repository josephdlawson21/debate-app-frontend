

import React                                            from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import ReactDOM                                         from 'react-dom';
import { BrowserRouter as Router, Switch, Route }       from 'react-router-dom';
import App                                              from './containers/app';
import createBrowserHistory                             from 'history/createBrowserHistory'


import Authentication                                   from './components/authentication.jsx';
import Home                                             from './components/home.jsx'

const history =                                         createBrowserHistory();

ReactDOM.render(
  <Router basename="/" history={ history } >
      <Switch>
          <Route exact path="/login"              component={Authentication} />
          <Route exact path="/signup"             component={Authentication} />
          <App>
            <Route path ="/home"                  component={Home}/>
          </App>
      </Switch>
  </Router>,
  document.getElementById('root')
);
