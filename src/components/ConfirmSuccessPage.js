import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input,
  Container, Row, Col,Alert } from 'reactstrap';
import { startViewBooking } from '../actions/booking';


export class ConfirmSuccessPage extends React.Component {
 
  startViewBooking = () => {
    const details ={
      academicYear:this.props.academicYear
    };
    this.props.startViewBooking(details).then(()=>{
      this.props.history.push('/booking');

  });

};
  render() {
    return (
      <Container fluid>
       <Container>
      
       <h4 className="text-center form__header mt-3">Booking Successful</h4>
       <div className="text-center mt-3">{this.props.reg_no}</div>
      
             <Alert color="success">
               You have successfully booked room. 
               <Button color="link" onClick={this.startViewBooking}>View Details</Button>
             </Alert>
       </Container>
       </Container>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    reg_no:state.auth.regNo,
    academicYear:state.auth.academicYear
  };
};

const mapDispatchToProps = (dispatch) => ({
  startViewBooking: (details) => dispatch(startViewBooking(details))
});
  
export default connect(mapStateToProps,mapDispatchToProps)(ConfirmSuccessPage);
  
