import React, { Component } from 'react';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends Component {
  render() {
    return (
      <div className="Auth">
        <Form>
         <FormGroup>
           <Label for="exampleEmail">Email</Label>
           <Input type="email" name="email" id="email" />
         </FormGroup>
         <FormGroup>
           <Label for="examplePassword">Password</Label>
           <Input type="password" name="password" id="password" />
         </FormGroup>
         <Button>Login</Button>
        </Form>
      </div>
    );
  }
}

export default Login;
