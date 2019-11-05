
import React from 'react';
import { Button, Form, FormGroup, Label, Input,Alert } from 'reactstrap';
import { Link } from 'react-router-dom';

export default  class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      adm: '',
      password: '',
      error: ''
    };
  }
   
onAdmChange = (e) => {
  const adm = e.target.value;
  this.setState(() => ({ adm }));
};
  onPasswordChange = (e) => {
  const password = e.target.value;
  this.setState(() => ({ password}));
};
  
onSubmit = (e) => {
  e.preventDefault();
  this.setState(() => ({ error: '' }));
  
  if (!this.state.adm || !this.state.password ) {
    this.setState(() => ({ error: 'Please provide all details.' }));
  
    } else {
      this.setState(() => ({ error: '' }));
      let reg = this.state.adm.replace(/\//g, "-");

      const user ={
      adm:reg.toUpperCase(),
      password:this.state.password
    };
    this.props.onSubmit(user);
    };
  }

  render() {
    return (

        <Form onSubmit={this.onSubmit}>
        <FormGroup> 
          <Label for="adm">Reg No</Label>
          <Input
            className="border border-secondary"
            bsSize="md"
            type="text"
            name="adm"
            id="adm"
            value={this.state.adm}
            onChange={this.onAdmChange}
            required
             />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input 
          className="border border-secondary"
          bsSize="md"
          type="password"
          name="password"
          id="password"
          value={this.state.password}
          onChange={this.onPasswordChange}
          required
             />
        </FormGroup>
       {this.props.message &&  <p className="form__error mb-1" >{this.props.message}</p>}
        <div className="box-layout__header " >
        <Button color="primary" className="mt-3">Log in</Button>
        </div>
        <div className="d-flex justify-content-between mt-3">
         <Link  to="/" className="">
          Forgot Password?
          </Link> 
        <Link  to="/signup" className="  "> Sign Up</Link>
        </div>
      </Form>
    );
  }
}



