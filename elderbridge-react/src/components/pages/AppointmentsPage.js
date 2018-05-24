import React, { Component } from 'react';
import Appointments from '../Appointments'
import Navbar from '../Navbar'

class AppointmentsPage extends Component {


  render() {
    const view = sessionStorage.getItem("events") ? "month" : "week";

    return (
      <div>
        <Navbar history={this.props.history}/>
        <div className="ui container">
          <h1>Calendar</h1>
          <Appointments view={view} />
        </div>
      </div>
    );
  }
}

export default AppointmentsPage;
