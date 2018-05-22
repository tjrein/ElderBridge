import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import DashboardPage from './components/pages/DashboardPage';
import AppointmentsPage from './components/pages/AppointmentsPage'

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/dashboard" exact component={DashboardPage} />
        <Route path="/appointments" exact component={AppointmentsPage} />
      </div>
    );
  }
}

export default App;
