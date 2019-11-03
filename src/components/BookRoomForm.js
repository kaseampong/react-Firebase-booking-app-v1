import React from 'react';
import { Button, Form, FormGroup, Label, Input,
Alert,FormText } from 'reactstrap';


export default class BookRoomForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      adm:props.adm ? props.adm : '',
      gender:props.gender ? props.gender : '',
      hostel:'',
      room: '',
      term:'',
      error: ''
    };
  }
   
  onAdmChange = (e) => {
    const adm = e.target.value;
    this.setState(() => ({ adm }));
  };
onHostelNameChange = (e) => {
    const hostel = e.target.value;
    this.setState(() => ({ hostel }));
  };

onRoomNameChange = (e) => {
  const room = e.target.value;
  this.setState(() => ({ room }));
};
onTermChange = (e) => {
  const term = e.target.value;
  this.setState(() => ({ term }));
};
  
onSubmit = (e) => {
  e.preventDefault();
  if (!this.state.adm || !this.state.hostel || !this.state.room || !this.state.term ) {
    this.setState(() => ({ error: 'Please provide all details.' }));
    } else {
      this.setState(() => ({ error: '' }));
      let today = new Date();
      let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      let time=today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
   
    const details ={
      adm:this.state.adm,
      gender:this.state.gender,
      hostel:this.state.hostel.toUpperCase(),
      room:this.state.room.toUpperCase(),
      term:this.state.term,
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
        <FormGroup >
          <Label for="gender" className="mt-2">Gender</Label>
          <Input
            bsSize="lg"
            type="text"
            name="gender"
            id="gender"
            value={this.state.gender}
            readOnly
            required
             />
             <FormText>Confirm your gender please.</FormText>
        </FormGroup>
          <FormGroup>
          <Label for="hostel" >Select Hostel</Label>
          <Input  
          bsSize="lg" 
          type="select" 
          name="hostel" 
          id="hostel"
          value={this.state.hostel}
          onChange={this.onHostelNameChange}
          required>
            <option value=""> -- Select -- </option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>TANA</option>
          </Input>
        </FormGroup>
       <FormGroup >
          <Label for="room" className="mt-2">Room name</Label>
          <Input
            bsSize="lg"
            type="text"
            name="room"
            id="room"
            value={this.state.room}
            onChange={this.onRoomNameChange}
            required
             />
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
       {this.props.message === "You have already booked room." ?
       <Alert color="success" className="mb-2">{this.props.message}</Alert>:<p className="form__error mb-2">{this.props.message}</p>}
        <div className="box-layout__header" >
        <Button color="primary" className="mt-3">Book Room</Button>
        </div>
      </Form>
    );
  }
}



