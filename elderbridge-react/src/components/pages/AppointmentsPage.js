import React, { Component } from 'react';
import Appointments from '../Calendar.js'

class AppointmentsPage extends Component {


  render() {
    return (
      <div>
        <h1>Calendar</h1>

        <Appointments />
      </div>
    );
  }
}

export default AppointmentsPage;
