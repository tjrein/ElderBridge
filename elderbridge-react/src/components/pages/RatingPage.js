import React, { Component } from 'react';
import Navbar from '../Navbar';
import { Grid, Form, TextArea, Button, Icon } from 'semantic-ui-react';

class RatingPage extends Component {
  state = {
    meh: "grey",
    frown: "grey",
    smile: "grey",
    selected: "",
  };

  handleSelect = e => {
    let key = e.currentTarget.id;
    let oldSelection = this.state.selected;
    let color = this.determineColor(key);
    let newState = { [key]: color, "selected": key };

    if (oldSelection) {
      newState[oldSelection] = "grey";
    }

    this.setState(newState);
  };

  handleLeave = e => {
    let key = e.currentTarget.id;

    if (key !== this.state.selected) {
      this.setState({ [key]: "grey" });
    }
  };

  handleHover = e => {
    let key = e.currentTarget.id;
    let color = this.determineColor(key);

    this.setState({ [key]: color });
  };

  determineColor = key => ({ smile: "green", meh: "yellow", frown: "red" }[key]);

  submit = e => this.props.history.push({
    pathname:"/dashboard",
    state: {
      messageVisible: true,
      content: "Thank you for your feedback.",
      header: "Rating submitted!",
      positive: true
    }
  });

  render() {
    const {smile, frown, meh} = this.state
    return (
      <div>
        <Navbar display_backbutton={true} history={this.props.history}/>
        <div className="ui container">
          <Grid columns={3} centered>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Button circular basic
                  size="massive"
                  id="smile"
                  icon={<Icon id="smile-icon" fitted name="smile" className="outline" size="huge" color={smile} />}
                  onMouseEnter={this.handleHover}
                  onMouseLeave={this.handleLeave}
                  onClick={this.handleSelect}
                />
              </Grid.Column>
              <Grid.Column textAlign="center">
                <Button circular basic
                  size="massive"
                  id="meh"
                  icon={<Icon name="meh" className="outline" size="huge" color={meh} />}
                  onMouseEnter={this.handleHover}
                  onMouseLeave={this.handleLeave}
                  onClick={this.handleSelect}
                />
              </Grid.Column>
              <Grid.Column textAlign="center">
                <Button circular basic
                  size="massive"
                  id="frown"
                  icon={<Icon name="frown" className="outline" size="huge" color={frown} />}
                  onMouseEnter={this.handleHover}
                  onMouseLeave={this.handleLeave}
                  onClick={this.handleSelect}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        <div className="ui container">
          <Form>
            <TextArea placeholder='Tell us more' style={{ minHeight: 100 }} />
            <div className="ui container center aligned">
              <Button primary size="massive" type='submit' onClick={this.submit}>Submit</Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default RatingPage;
