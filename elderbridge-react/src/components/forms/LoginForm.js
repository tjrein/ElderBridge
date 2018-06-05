import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from '../messages/InlineError';

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

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
    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data);
    }
  }

  validate = (data) => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = "Enter a valid email";
    if (!data.password) errors.password = "Enter a password";
    return errors;
  }

  render() {
    const { email, password, errors } = this.state;

    return (
      <Form size ="massive" onSubmit={this.onSubmit}>
        <Form.Field>
          <label>Email</label>
          <input
            name="email"
            placeholder="example@example.com"
            value={email}
            onChange={this.handleChange}
          />
          {errors.email && <InlineError text={errors.email} />}
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            name="password"
            placeholder="**********"
            value={password}
            onChange={this.handleChange}
          />
          {errors.password && <InlineError text={errors.password} />}
        </Form.Field>
        <div className="ui container center aligned">
        <Button primary size="massive">Login</Button>
        </div>
      </Form>
    );
  }
}

export default LoginForm;
