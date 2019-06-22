import React from 'react';
import { Button, Form, FormGroup, Label, Input,
  Container, Row, Col,Alert } from 'reactstrap';
import { startLogin } from '../actions/auth';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export default class BookRoomForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hostel_name:'',
      room_name: '',
      error: ''
    };
  }
   
onHostelNameChange = (e) => {
    const hostel_name = e.target.value;
    this.setState(() => ({ hostel_name }));
  };

onRoomNameChange = (e) => {
  const room_name = e.target.value;
  this.setState(() => ({ room_name }));
};
  
onSubmit = (e) => {
  e.preventDefault();
  if (!this.state.room_name ) {
    this.setState(() => ({ error: 'Please provide all details.' }));
    } else {
      this.setState(() => ({ error: '' }));
      var today = new Date();
      const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      const time=today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
   
    const details ={
      hostelName:this.state.hostel_name.toUpperCase(),
      roomName:this.state.room_name.toUpperCase(),
      bookingDate:date,
      bookingTime:time
    };
    this.props.onSubmit(details);
    };
  }

  render() {
    return (
          <Form onSubmit={this.onSubmit}>
             <FormGroup>
          <Label for="hostel" >Select Hostel</Label>
          <Input  
          bsSize="lg" 
          type="select" 
          name="hostel" 
          id="hostel"
          value={this.state.hostel_name}
          onChange={this.onHostelNameChange}
          required>
           <option></option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
            <option>E</option>
            <option>F</option>
            <option>G</option>
            <option>TANA</option>

          </Input>
        </FormGroup>
       
       <FormGroup >
          <Label for="room_name" className="mt-2">Enter Room name</Label>
          <Input
            bsSize="lg"
            type="text"
            name="room_name"
            id="room_name"
            value={this.state.room_name}
            onChange={this.onRoomNameChange}
            required
             />
        </FormGroup>
       {this.props.message === "You have already booked room." ?
       <Alert color="success" className="mb-2">{this.props.message}</Alert>:<p className="form__error mb-2">{this.props.message}</p>}
        <div className="box-layout__header" >
        <Button color="primary" className="mt-3">Book Room</Button>
        </div>
      </Form>
    );
  }
}



