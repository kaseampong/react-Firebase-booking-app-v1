import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText,Alert } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      regNo: '',
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
    if(!this.state.passwordone.match(/.{8,}/)){
      this.setState(() => ({ error: 'Password must contain at least 8 characters.' }));

    }else{
        this.setState(() => ({ error: '' }));
      if (this.state.passwordone !== this.state.passwordtwo) {
        this.setState(() => ({ error: 'Passwords are not matching.' }));
      } else {
        this.setState(() => ({ error: '' }));
        let today = new Date();  
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let time=today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    
        const user ={
          regNo:this.state.regNo.toUpperCase(),
          userGender:this.state.gender,
          password:this.state.passwordtwo,
          createdDate: date,
          createdTime:time
        }
        this.props.onSubmit(user);
      }
    }

  };
  render() {
    return (
        <Form  onSubmit={this.onSubmit}>
        <FormGroup>
          <Label for="regNo">Reg No</Label>
          <Input 
           className="border border-secondary"
           bsSize="md"
           type="text" 
           name="regNo" 
           id="regNo"
           value={this.state.regNo}
           onChange={this.onRegNoChange}
           required />
        </FormGroup>
    <FormGroup>
          <Label for="gender">Gender</Label>
          <Input
          className="border border-secondary"
          bsSize="md" 
          type="select" 
          name="gender" 
          id="gender"
          value={this.state.gender}
          onChange={this.onGenderChange}
          required>
            <option value=""> -- Select -- </option>
            <option>Male</option>
            <option>Female</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input  
          className="border border-secondary"
          bsSize="md" 
          type="password" 
          name="passwordone" 
          id="passwordone" 
          value={this.state.passwordone}
          onChange={this.onPasswordoneChange}
          required />
        </FormGroup>
        <FormGroup>
          <Label for="password">Confirm Password</Label>
          <Input 
          className="border border-secondary"
          bsSize="md"  
          type="password" 
          name="passwordtwo" 
          id="passwordtwo" 
          value={this.state.passwordtwo}
          onChange={this.onPasswordtwoChange}
          required />
        </FormGroup>
    {this.state.error && <p className="form__error mb-1">{this.state.error}</p>}
    {this.props.message === 'You have registered successfully.'&& <Alert className="mb-2" color="success">{this.props.message} </Alert>}
    {this.props.message === 'Registration number is already taken.'&& <p className="form__error mb-2" >{this.props.message} </p>}
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
