import React, { Component } from 'react';
//import { Button } from 'semantic-ui-react';
import Navbar from "../Navbar.js"

class DashboardPage extends Component {

  onClick = () => {
    this.props.history.push("/appointments");
  }

  //<Button size="massive" onClick={this.onClick}>Schedule an Appointment</Button>
  //<Button size="massive">Rate past Appointment</Button>
  render() {
    return (
      <div>
        <Navbar />
        <h1>Dashboard</h1>

      </div>
    );
  }
}

export default DashboardPage;
