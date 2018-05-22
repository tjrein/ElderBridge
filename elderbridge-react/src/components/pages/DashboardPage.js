import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class DashboardPage extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Button size="Massive">Schedule an Appointment</Button>
        <Button size="Massive">Rate past Appointment</Button>
      </div>
    );
  }
}

export default DashboardPage;
