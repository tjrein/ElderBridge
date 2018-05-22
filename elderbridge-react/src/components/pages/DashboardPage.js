import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class DashboardPage extends Component {

  onClick = () => {
    console.log("HEYEHEYEHEYE");
    this.props.history.push("/appointments");
  }


  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Button size="massive" onClick={this.onClick}>Schedule an Appointment</Button>
        <Button size="massive">Rate past Appointment</Button>
      </div>
    );
  }
}

export default DashboardPage;
