import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Login from "./components/Pages/auth/Login";
import Register from "./components/Pages/auth/Register";
import Landing from "./components/layouts/Landing";
import Product from "./components/Pages/product/Product";
import ProductCreate from "./components/Pages/product/Product-create";
import ProductEdit from "./components/Pages/product/Product-edit";
import Transaksi from "./components/Pages/tranksaksi/Transaksi";


//CONF STORE REDUX
import { Provider } from 'react-redux';
import store from './store';



class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <div>
              <Route exact path="/" component={Login} />
              <Route exact path="/register" component={Register} />
              <Switch>
                <Route exact path="/dashboard" component={Landing} />
                <Route exact path="/product" component={Product} />
                <Route exact path="/product-create" component={ProductCreate} />
                <Route exact path="/product-edit/:id" component={ProductEdit} />
                <Route exact path="/transaksi" component={Transaksi} />
              </Switch>
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
