import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import './css/navbar.css'

class Navbar extends Component {

  logout = () => {
    sessionStorage.clear();
    this.props.history.push('/login');
  }

  goBack = () => {
    this.props.history.push('/dashboard');
  }

  render() {
    const logout_button = this.props.history ? (
      <Button primary size='large' floated='right' onClick={this.logout}>Log out</Button>
    ) : "";

    const back_button = this.props.display_backbutton ? (
      <Button primary size='large' floated='right' onClick={this.goBack}>Go back</Button>
    ) : "";

    return (
        <nav>
            <h2>ElderBridge</h2>
            {logout_button}
            {back_button}
        </nav>
    );
  }
}

export default Navbar;
