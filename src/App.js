import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


//CONF STORE REDUX
import { Provider } from 'react-redux';
import store from './store';

import Login from "./components/Pages/auth/Login";
import Dashboard from "./components/Pages/Dashboard";
// import ProductList from "./components/Pages/product/Productlist";
// import TransaksiList from "./components/Pages/tranksaksi/Transaksilist";
import PrivateRoute from './components/utils/PrivateRoute';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <div>
              <Route exact path="/" component={Login} />
              <Switch>
                <Route exact path="/dashboard" component={Dashboard} />
              </Switch>
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
