
import React from 'react';
import { Button, Form, FormGroup, Label, Input,
  Container, Row, Col,Alert } from 'reactstrap';
import { startLogin } from '../actions/auth';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export default class PaymentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: '',
      error:''
    };
  }
   
onAmountChange = (e) => {
    const amount = e.target.value;
    this.setState(() => ({ amount }));
  };

  
onSubmit = (e) => {
  e.preventDefault();
  if (this.state.amount <= 0 ) {
    this.setState(() => ({ error:'amount must be greater than 0' }));
    } else {
      this.setState(() => ({ error: '' }));
      var today = new Date();
      const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      const time=today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
   
    const details ={
      amountPaid:parseInt(this.state.amount, 10),
      paymentDate:date,
      paymentTime:time
    };
    this.props.onSubmit(details);
    };
  }

  render() {
    return (
    <Form onSubmit={this.onSubmit}>
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



