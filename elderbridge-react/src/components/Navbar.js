import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import './css/navbar.css'

class Navbar extends Component {

  logout = () => {
    sessionStorage.clear();
    this.props.history.push('/login');
  }

  render() {
    const logout_button = this.props.history ? (
      <Button primary size='large' floated='right' onClick={this.logout}>Log out</Button>
    ) : "";


    return (
        <nav>
            <h2>ElderBridge</h2>
            {logout_button}
        </nav>
    );
  }
}

export default Navbar;
