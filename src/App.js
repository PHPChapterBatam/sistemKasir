import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import setAuthToken from "./components/utils/setAuthToken";
import { setCurrentUser, logoutUser } from './redux/actions/AuthActions';
import jwt_decode from 'jwt-decode';

import Login from "./components/Pages/auth/Login";
import Dashboard from "./components/Pages/Dashboard";
import PrivateRoute from './components/utils/PrivateRoute';


//CONF STORE REDUX
import { Provider } from 'react-redux';
import store from './store';


//CLEAR CACHE TOKEN
// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = '/login';
  }
}


class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <div>
              <Route exact path="/" component={Login} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
