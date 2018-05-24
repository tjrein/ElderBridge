import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import Navbar from "../Navbar"

class DashboardPage extends Component {

  onClick = () => {
    console.log("this.props dashboard", this.props);
    this.props.history.push("/appointments");
  }



  render() {
    return (
      <div>
        <Navbar history={this.props.history}/>
        <div className="ui container">
        <h1>Dashboard</h1>
          <Button primary size="massive" onClick={this.onClick}>Schedule an Appointment</Button>
          <Button primary size="massive">Rate past Appointment</Button>
        </div>

      </div>
    );
  }
}

export default DashboardPage;
