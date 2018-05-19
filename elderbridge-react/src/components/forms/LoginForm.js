import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class LoginForm extends Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    loading: false,
    errors: {}
  };

  onChange = e => 
    this.setState({ 
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });


  render() {
    const { data } = this.state;

    return (
      <Form>
        <Form.Field>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="example@example.com" 
            value={data.email} 
            onChange={this.onChange}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="email">Email</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="**********" 
            value={data.password} 
            onChange={this.onChange}
          />
        <Button primary>Login</Button>
        </Form.Field>
      </Form>
    );
  }
}

export default LoginForm;
