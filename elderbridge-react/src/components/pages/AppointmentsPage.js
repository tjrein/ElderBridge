import React, { Component } from 'react';
import Appointments from '../Appointments.js'

class AppointmentsPage extends Component {


  render() {
    const view = sessionStorage.getItem("events") ? "month" : "week";

    return (
      <div>
        <h1>Calendar</h1>

        <Appointments view={view} />
      </div>
    );
  }
}

export default AppointmentsPage;
