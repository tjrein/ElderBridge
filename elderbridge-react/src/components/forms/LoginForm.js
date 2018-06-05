import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import Validator from 'validator';
import WarningMessage from '../messages/WarningMessage';

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    errors: [],
    displayMessage: false,
    messageHeader: "Login invalid!",
    messageContent: "Please correct the errors above"
  };

  hideMessage = () => this.setState({displayMessage: false, errors: [] });

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  onSubmit = () => {
    const errors = this.validate({
      email: this.state.email,
      password: this.state.password
    });

    this.setState({ errors });
    if (errors.length === 0) {
      this.props.submit(this.state.data);
    } else {
      this.setState({displayMessage: true});
    }
  }

  validate = (data) => {
    const errors = [];
    if (!Validator.isEmail(data.email)) errors.push("Enter a valid email");
    if (!data.password) errors.push("Enter a password");
    return errors;
  }

  render() {
    const { email, password, errors, displayMessage, messageHeader, messageContent } = this.state;

    return (
      <div>
      { displayMessage && <WarningMessage
                            callback={this.hideMessage}
                            className="negative"
                            list={errors}
                            header={messageHeader}
                            content={messageContent}
                            selfDestruct={false}
                          />}
      <Form size ="massive" onSubmit={this.onSubmit}>
        <Form.Field>
          <label>Email</label>
          <input
            name="email"
            placeholder="example@example.com"
            value={email}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            name="password"
            placeholder="**********"
            value={password}
            onChange={this.handleChange}
          />
        </Form.Field>
        <div className="ui container center aligned">
        <Button primary size="massive">Login</Button>
        </div>
      </Form>
      </div>
    );
  }
}

export default LoginForm;
