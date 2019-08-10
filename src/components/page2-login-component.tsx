import * as React from 'react';
import {Form, Button} from 'react-bootstrap';
import Axios from 'axios';
import { connect } from 'react-redux';

// interface for the LoginComponent that details the attributes to be found on that Class
interface LoginState {
  userId: number,
  username: string,
  password: string
  firstName: string,
  lastName: string,
  email: string,
  role: string
}

// component for the login capability for the application
export default class LoginComponent extends React.Component<any, LoginState> {

  // constrcutor method used to declare the properties
  constructor(props:any) {
    // inherit from parent component
    super(props);

    // current state of the login component
    // current state set to use of ebdegu01
    this.state = {
      userId: 0,
      username: "ebdegu011",
      password: "password",
      firstName: "",
      lastName: "",
      email: "",
      role: ""
    };
    
  }

  // event listener that wait for input to be entered for login 
  // takes username and password input
  handleChange(event: any) {
    // this.setState({username: event.target.username});
    // this.setState({password: event.target.password});

    const usernameInput = event.target.usernameInput;
    const passwordInput = event.target.passwordInput;
    this.setState({
      ...this.state,
      username: usernameInput,
      password: passwordInput
    });
  }
  
  // event listener for when the user clicks a button and logs in 
  async handleLogin() {
    // url to the API 
    const url = "http://localhost:3004/login";

    // data that we are using to login 
    // entering username and password information
    const data = {
      username: this.state.username,
      password: this.state.password
    }
    console.log(url);
    alert(data.username + " has logged in!");
    Axios.post(url, data).then(payload => {
      this.props.history.push("/home");
      console.log(payload.data.authToken);
      localStorage.setItem("ejToken", payload.data.authToken);
      // this.setState({
        // userId: payload.data.userId,
        // username: payload.data.username,
        // password: payload.data.password,
        // firstName: payload.data.firstName,
        // lastName: payload.data.lastName,
        // email: payload.data.email,
        // role: payload.data.role
      // 
    });
  }

    render() {
        return (
            <Form>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" value={this.state.username} onChange={(event: any) => this.handleChange(event)} placeholder="Enter username" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={this.state.password} onChange={(event: any) => this.handleChange(event)} placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={() => this.handleLogin()}>
              Log In
            </Button>
          </Form>
        );
    }
    
}
