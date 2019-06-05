import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input,
  Container, Row, Col,Alert } from 'reactstrap';
import { startViewBooking } from '../actions/booking';


export class BookingSuccessPage extends React.Component {
 
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
      <div>
      <div className="page-header">
         <h1 className="page-header__title text-center">Booking  Successful</h1>
     </div>
      <Container fluid>
       <Container>
      
       <div className="text-center mt-3">{this.props.reg_no}</div>
             <Alert color="success">
               You have successfully booked room for academic Year <span>{this.props.academicYear}</span>. 
               <Button color="link" onClick={this.startViewBooking}>View Details</Button>
             </Alert>
       </Container>
       </Container>
       </div>
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
  
export default connect(mapStateToProps,mapDispatchToProps)(BookingSuccessPage);
  
