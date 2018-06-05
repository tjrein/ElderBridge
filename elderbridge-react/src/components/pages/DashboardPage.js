import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import Navbar from "../Navbar"
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import DashboardMessage from '../messages/DashboardMessage';

class DashboardPage extends Component {

  onClick = (e) => {
    const calendar_view = e.target.innerHTML.split(' ')[0] === "View" ? "month" : "week";
    this.props.history.push({
      pathname: "/appointments",
      state: {
        calendar_view: calendar_view,
      }
    });
  };

  ratingClick = (e) => {
    this.props.history.push({pathname: "/rate"})
  }

  render() {
    let displayMessage = this.props.location && this.props.location.state && this.props.location.state.messageVisible

    let message = displayMessage ? (
      <div className="ui container">
        <DashboardMessage
          history={this.props.history}
          content={this.props.location.state.content}
          header={this.props.location.state.header}
          positive={this.props.location.state.positive}
        />
      </div>
    ) : "";

    let view_appointments_button = sessionStorage.getItem('events') ? (
      <div className="row">
        <div>
          <i className="fa fa-clock-o fa-5x fa-fw" aria-hidden="true"></i>
        </div>
        <div className="eleven wide column">
          <Button fluid primary size="massive" onClick={this.onClick}>View Appointments</Button>
        </div>
      </div>
    ) : "";

    return (
      <div>
        <Navbar history={this.props.history} />
        {message}
        <div className="ui container">
          <div className="ui grid centered">
            {view_appointments_button}
            <div className="row">
              <div>
                <i className="fa fa-calendar-plus-o fa-5x fa-fw" aria-hidden="true"></i>
              </div>
              <div className="eleven wide column">
                <Button fluid primary size="massive" onClick={this.onClick}>Schedule an Appointment</Button>
              </div>
            </div>
            <div className="row">
              <div>
                <i className="fa fa-smile-o fa-5x fa-fw" aria-hidden="true"></i>
              </div>
              <div className="eleven wide column">
                <Button fluid primary size="massive" onClick={this.ratingClick}>Rate past Appointment</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardPage;
