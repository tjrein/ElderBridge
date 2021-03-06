import React, { Component } from 'react';
import LoginForm from '../forms/LoginForm';
import Navbar from '../Navbar';

class LoginPage extends Component {

  submit = data => {
    this.props.history.push('/dashboard')
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="ui container">
          <LoginForm submit={this.submit}/>
        </div>
      </div>
    );
  }
}

export default LoginPage;
