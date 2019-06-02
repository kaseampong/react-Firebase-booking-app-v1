import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText,Alert } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      regNo: '',
      firstname:'',
      lastname:'',
      email:'',
      gender:'',
      passwordone:'',
      passwordtwo:'',
      error: ''
    };
  }
  onRegNoChange = (e) => {
    const regNo = e.target.value;
    this.setState(() => ({ regNo }));
  };
  onFirstnameChange = (e) => {
    const firstname = e.target.value;
    this.setState(() => ({ firstname }));
  };
  onLastnameChange = (e) => {
    const lastname = e.target.value;
      this.setState(() => ({ lastname }));
  };
  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({ email }));
  };
  onGenderChange = (e) => {
    const gender = e.target.value;
    this.setState(() => ({ gender }));

  };
  onPasswordoneChange = (e) => {
    const passwordone = e.target.value;
    this.setState(() => ({ passwordone }));
  };
  onPasswordtwoChange = (e) => {
    const passwordtwo = e.target.value;
    this.setState(() => ({ passwordtwo }));
  };
  onSubmit = (e) => {
    e.preventDefault();

  if (this.state.passwordone !== this.state.passwordtwo) {
    this.setState(() => ({ error: 'Passwords are not matching.' }));
  } else {
    this.setState(() => ({ error: '' }));
    let today = new Date();  
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    const user ={
      regNo:this.state.regNo.toUpperCase(),
      firstName:this.state.firstname,
      lastName:this.state.lastname,
      email:this.state.email,
      userGender:this.state.gender,
      password:this.state.passwordtwo,
      createdAt: date
    }
    this.props.onSubmit(user);
  }

  
  };
  render() {
    return (
        <Form  onSubmit={this.onSubmit}>
            {this.state.error && <p className="form__error">{this.state.error}</p>}
        <FormGroup>
          <Label for="regNo">Reg No</Label>
          <Input 
           bsSize="sm"
           type="text" 
           name="regNo" 
           id="regNo"
           value={this.state.regNo}
           onChange={this.onRegNoChange}
           required />
        </FormGroup>
      <Row form>
      <Col md={6}>
        <FormGroup>
          <Label for="firstname">First name</Label>
          <Input 
          bsSize="sm" 
          type="text" 
          name="firstname" 
          id="firstname"
          value={this.state.firstname}
          onChange={this.onFirstnameChange} 
          required />
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="lastname">Last name</Label>
          <Input 
          bsSize="sm"  
          type="text" 
          name="lastname" 
          id="lastname"
          value={this.state.lastname}
          onChange={this.onLastnameChange}
          required  />
        </FormGroup>
      </Col>
    </Row>
    <FormGroup>
          <Label for="gender">Gender</Label>
          <Input  
          bsSize="sm" 
          type="select" 
          name="gender" 
          id="gender"
          value={this.state.gender}
          onChange={this.onGenderChange}
          required>
           <option></option>
            <option>Male</option>
            <option>Female</option>
          </Input>
        </FormGroup>
   <FormGroup>
              <Label for="email">Email</Label>
              <Input 
              bsSize="sm"  
              type="email" 
              name="email" 
              id="email" 
              value={this.state.email}
              onChange={this.onEmailChange}
              required />
            </FormGroup>
            <Row form>
      <Col md={6}>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input  
          bsSize="sm" 
          type="password" 
          name="passwordone" 
          id="passwordone" 
          value={this.state.passwordone}
          onChange={this.onPasswordoneChange}
          required />
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="password">Confirm Password</Label>
          <Input 
          bsSize="sm"  
          type="password" 
          name="passwordtwo" 
          id="passwordtwo" 
          value={this.state.passwordtwo}
          onChange={this.onPasswordtwoChange}
          required />
        </FormGroup>
      </Col>
    </Row>
    {this.props.message && this.props.message === 'You have registered successfully'?<Alert className=" mb-2" color="success">{this.props.message} </Alert>:<p className="form__error mb-2">{this.props.message}</p>}

    <div className="box-layout__header" >
        <Button color="primary">Sign Up</Button>
        </div>
        <Link  to="/" className=" text-left ">
          Log in
          </Link>
    </Form>

    )
  }
}
