import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import Navbar from "../Navbar"

class DashboardPage extends Component {

  onClick = (e) => {
    const calendar_view = e.target.innerHTML.split(' ')[0] === "View" ? "month" : "week";
    this.props.history.push({
      pathname: "/appointments",
      state: { calendar_view: calendar_view }
    });
  }

  render() {
    const view_appointments_button = sessionStorage.getItem('events') ? (
      <div><Button primary size="massive" onClick={this.onClick}>View Appointments</Button></div>
    ) : "";

    return (
      <div>
        <Navbar history={this.props.history}/>
        <div className="ui container">
        <h1>Dashboard</h1>
          {view_appointments_button}
          <div><Button primary size="massive" onClick={this.onClick}>Schedule an Appointment</Button></div>
          <div><Button primary size="massive">Rate past Appointment</Button></div>
        </div>

      </div>
    );
  }
}

export default DashboardPage;
