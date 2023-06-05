import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Rentals from './components/rentals';
import Customers from './components/customers';
import Notfound from './components/NotFound';
import Movies from './components/movies';
import Navbar from './components/navBar';
import LoginForm from './components/loginForm';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path='/movies' component={Movies} />
          <Route path='/rentals' component={Rentals} />
          <Route path='/customers' component={Customers} />
          <Route path='/login' component={LoginForm} />
          <Route path='/notfound' component={Notfound} />
          <Redirect path='/' exact to="/movies" />
          <Redirect to="/notfound" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App; 