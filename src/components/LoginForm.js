
import React from 'react';
import { Button, Form, FormGroup, Label, Input,
  Container, Row, Col,Alert } from 'reactstrap';
import { startLogin } from '../actions/auth';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export default  class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reg_no: '',
      password: '',
      error: ''
    };
  }
   
onRegNoChange = (e) => {
  const reg_no = e.target.value;
  this.setState(() => ({ reg_no }));
};
  onPasswordChange = (e) => {
  const password = e.target.value;
  this.setState(() => ({ password}));
};
  
onSubmit = (e) => {
  e.preventDefault();
  
  if (!this.state.reg_no || !this.state.password ) {
    this.setState(() => ({ error: 'Please provide all details.' }));
  
    } else {
      this.setState(() => ({ error: '' }));
      const user ={
      regNo:this.state.reg_no.toUpperCase(),
      password:this.state.password
    };
    this.props.onSubmit(user);
    };
  }

  render() {
    return (

        <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <Label for="reg_no">Reg No</Label>
          <Input
          bsSize="md"
            type="text"
            name="reg_no"
            id="reg_no"
            value={this.state.reg_no}
            onChange={this.onRegNoChange}
            required
             />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input 
          bsSize="md"
          type="password"
           name="password"
            id="password"
           value={this.state.password}
          onChange={this.onPasswordChange}
          required
             />
        </FormGroup>
       {this.props.authStatus && <p className="form__error  mb-2">{this.props.authStatus}</p>}
        <div className="box-layout__header " >
        <Button color="primary" className="mt-3">Log in</Button>
        
        </div>
        <div className="d-flex justify-content-between mt-3">

        {/* <Link  to="/" className="  ">
          Forgot Password?
          </Link> */}
        <Link  to="/signup" className="  "> Sign Up</Link>
        </div>
      </Form>
    );
  }
}



