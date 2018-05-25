import React, { Component } from 'react';
import Appointments from '../Appointments'
import Navbar from '../Navbar'

class AppointmentsPage extends Component {

  render() {
    const view = this.props.location.state.calendar_view;

    return (
      <div>
        <Navbar display_backbutton={true} history={this.props.history}/>
        <div className="ui container">
          <Appointments history={this.props.history} view={view} />
        </div>
      </div>
    );
  }
}

export default AppointmentsPage;
