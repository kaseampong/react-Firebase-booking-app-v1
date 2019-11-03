
import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class BookingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      academicYear: '',
      error: ''
    };
  }
   


onacademicYearChange = (e) => {
  const academicYear = e.target.value;
  this.setState(() => ({ academicYear }));
};
  
onSubmit = (e) => {
  e.preventDefault();
  
  if (!this.state.academicYear ) {
    this.setState(() => ({ error: 'Please fill the field.' }));
   
    } else {
      this.setState(() => ({ error: '' }));
   
    const details ={
      academicYear:this.state.academicYear
    };
    this.props.onSubmit(details);
    };
  }

  render() {
    return (
     <Form onSubmit={this.onSubmit}>
       <FormGroup>
          <Label for="hostel" >Select academic year</Label>
          <Input  
          bsSize="lg" 
          type="select" 
          name="hostel" 
          id="hostel"
          value={this.state.academicYear}
          onChange={this.onacademicYearChange}
          required>
            <option value=""> -- Select -- </option>
            <option>2016-2017</option>
            <option>2017-2018</option>
            <option>2018-2019</option>
            <option>2019-2020</option>
          </Input>
        </FormGroup>
        <div className="box-layout__header" >
        <Button color="primary" className="mt-3">View Booking</Button>
        </div>
      </Form>
      
    );
  }
}



