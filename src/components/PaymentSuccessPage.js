import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input,
  Container, Row, Col,Alert } from 'reactstrap';


export class PaymentSuccessPage extends React.Component {
 
  startBooking = () => {
    this.props.history.push('/book');
    
};
  render() {
    return (
      <div>
      <div className="page-header">
         <h1 className="page-header__title text-center">Payment successful</h1>
     </div>
      <Container fluid>
       <Container>
       <div className="text-center mt-3">{this.props.reg_no}</div>
      
             <Alert color="success" className=" mt-2">
               You have successfully made your payment for academic Year <span>{this.props.academicYear}</span>. 
               <Button color="link" onClick={this.startBooking}>Book now</Button>
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

  
export default connect(mapStateToProps)(PaymentSuccessPage);
  
