import React, { Component } from 'react';
import { Button, Icon, Grid } from 'semantic-ui-react';
import Navbar from "../Navbar"
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

    let viewAppointmentsBttn = sessionStorage.getItem('events') ? (
      <Grid.Row>
        <div>
          <Icon name="clock" className="outline dashboard-icon"  />
        </div>
        <Grid.Column width={11}>
          <Button fluid primary size="massive" onClick={this.onClick}>View Appointments</Button>
        </Grid.Column>
      </Grid.Row>
    ) : "";

    return (
      <div>
        <Navbar history={this.props.history} />
        {message}
        <div className="ui container">
          <Grid centered>
            {viewAppointmentsBttn}
            <Grid.Row>
              <div>
                <Icon name="calendar" className="plus outline dashboard-icon"  />
              </div>
              <Grid.Column width={11}>
                <Button fluid primary size="massive" onClick={this.onClick}>Schedule an Appointment</Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <div>
                <Icon name="smile" className="outline dashboard-icon"  />
              </div>
              <Grid.Column width={11}>
                <Button fluid primary size="massive" onClick={this.ratingClick}>Rate past Appointment</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default DashboardPage;
