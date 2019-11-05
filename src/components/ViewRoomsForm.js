
import React from 'react';
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';

export default class ViewRoomsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hostel: '',
      error: ''
    };
  }

onHostelChange = (e) => {
  const hostel = e.target.value;
  this.setState(() => ({ hostel }));
};
  
onSubmit = (e) => {
  e.preventDefault();
  
  if (!this.state.hostel ) {
    this.setState(() => ({ error: 'Please provide all details.' }));
  
    } else {
      this.setState(() => ({ error: '' }));
      const details ={
      hostel:this.state.hostel
    };
    this.props.onSubmit(details);
    };
  }

  render() {
    return (


        <Form  onSubmit={this.onSubmit}>
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
            <option value=""> -- Select -- </option>
            <option >A</option>
            <option >B</option>
            <option >C</option>
          </Input>
        </FormGroup>
        <div className="box-layout__header" >
        <Button color="primary" className="mt-3">View Rooms</Button>
        </div>
      </Form>
      
    );
  }
}



