import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import DashboardPage from './components/pages/DashboardPage';
import AppointmentsPage from './components/pages/AppointmentsPage';
import RatingPage from './components/pages/RatingPage';
import './components/css/app.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={LoginPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/dashboard" exact component={DashboardPage} />
        <Route path="/appointments" exact component={AppointmentsPage} />
        <Route path="/rate" exact component={RatingPage} />
      </div>
    );
  }
}

export default App;
