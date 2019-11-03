
import React from 'react';
import { Button, Form, FormGroup, Label, Input,Alert,FormText } from 'reactstrap';

export default class PaymentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      adm:props.adm ? props.adm : '',
      phone:'',
      term:'',
      amount: '',
      error:''
    };
  }
   
onAmountChange = (e) => {
    const amount = e.target.value;
    this.setState(() => ({ amount }));
  };
onPhoneChange = (e) => {
    const phone = e.target.value;
    this.setState(() => ({ phone }));
  };
  onTermChange = (e) => {
    const term = e.target.value;
    this.setState(() => ({ term }));
  };
  
onSubmit = (e) => {
  e.preventDefault();
  if (this.state.amount <= 0 ) {
    this.setState(() => ({ error:'amount must be greater than 0' }));
    } else {
      this.setState(() => ({ error: '' }));
      var today = new Date();
      let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      let time=today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
   
    const details ={
      adm:this.state.adm,
      phone:this.state.phone,
      term:this.state.term,
      amount:parseInt(this.state.amount, 10),
      date,
      time
    };
    this.props.onSubmit(details);
    };
  }

  render() {
    return (
    <Form onSubmit={this.onSubmit}>
      <FormGroup >
          <Label for="adm" className="mt-2">Adm No</Label>
          <Input
            bsSize="lg"
            type="text"
            name="adm"
            id="adm"
            value={this.state.adm}
            readOnly
            required
             />
             <FormText>Confirm your admission number please.</FormText>
        </FormGroup>
      <FormGroup>
          <Label for="phone">Phone Number</Label>
          <Input
            bsSize="lg"
            type="phone"
            name="phone"
            id="phone"
            value={this.state.phone}
            onChange={this.onPhoneChange}
            required
             /> 
             <FormText>Confirm your phone number please.</FormText>
        </FormGroup>
        <FormGroup >
          <Label for="term" className="mt-2">Term</Label>
          <Input  
          bsSize="lg" 
          type="select" 
          name="term" 
          id="term"
          value={this.state.term}
          onChange={this.onTermChange}
          required>
            <option value=""> -- Select -- </option>
            <option>SEMESTER 1 2019-2020</option>
          </Input>
        </FormGroup>
       <FormGroup>
          <Label for="room_name">Enter Amount</Label>
          <Input
            bsSize="lg"
            min={500}
            max={20000}
            type="number"
            name="amount"
            id="amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
            required
             /> 
        </FormGroup>
       {this.state.error && <p className="form__error mb-2">{this.state.error}</p>}
       {this.props.message && <Alert color="success" className="mb-2">{this.props.message}</Alert>}
        <div className="box-layout__header" >
        <Button color="primary" className="mt-3">Submit</Button>
        </div>
      </Form>
    );
  }
}



