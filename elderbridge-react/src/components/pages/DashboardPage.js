import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import Navbar from "../Navbar"

class DashboardPage extends Component {

  onClick = () => {
    this.props.history.push("/appointments");
  }


  render() {
    return (
      <div>
        <Navbar />
        <div className="ui container">
        <h1>Dashboard</h1>
          <Button size="massive" onClick={this.onClick}>Schedule an Appointment</Button>
          <Button size="massive">Rate past Appointment</Button>
        </div>

      </div>
    );
  }
}

export default DashboardPage;
