import React, { Component } from 'react';
import Navbar from '../Navbar';
import { Grid } from 'semantic-ui-react';

class RatingPage extends Component {

  render() {

    return (
      <div>
        <Navbar display_backbutton={true} history={this.props.history}/>
        <h1> Rating page </h1>
        <div className="ui container">
        <Grid columns={3} centered>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <i className="fa fa-smile-o fa-5x fa-fw" aria-hidden="true"></i>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <i className="fa fa-smile-o fa-5x fa-fw" aria-hidden="true"></i>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <i className="fa fa-smile-o fa-5x fa-fw" aria-hidden="true"></i>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </div>
      </div>
    );
  }
}

export default RatingPage;
