
import React from 'react';
import { Button, Form, FormGroup, Label, Input,
  Container, Row, Col,Alert } from 'reactstrap';

export default class ViewRoomsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hostel_name: '',
      error: ''
    };
  }

onHostelChange = (e) => {
  const hostel_name = e.target.value;
  this.setState(() => ({ hostel_name }));
};
  
onSubmit = (e) => {
  e.preventDefault();
  
  if (!this.state.hostel_name ) {
    this.setState(() => ({ error: 'Please provide all details.' }));
  
    } else {
      this.setState(() => ({ error: '' }));
      const details ={
      hostelName:this.state.hostel_name
    };
    this.props.onSubmit(details);
    };
  }

  render() {
    return (


        <Form onSubmit={this.onSubmit}>
       {/* {this.props.authStatus && <p className="form__error">{this.props.authStatus}</p>} */}
       <FormGroup>
          <Label for="hostel" >Select Hostel</Label>
          <Input  
          bsSize="lg" 
          type="select" 
          name="hostel" 
          id="hostel"
          value={this.state.hostel}
          onChange={this.onHostelChange}
          required>
           <option></option>
           <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
            <option>Tana</option>
          </Input>
        </FormGroup>
        <div className="box-layout__header" >
        <Button color="primary" className="mt-3">View Rooms</Button>
        </div>
      </Form>
      
    );
  }
}



