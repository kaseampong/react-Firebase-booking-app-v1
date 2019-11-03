import React from 'react';
import { connect } from 'react-redux';
import { Button, Container,Alert } from 'reactstrap';
import PageHeader from './PageHeader';


export class PaymentSuccessPage extends React.Component {
 
  startBooking = () => {
    this.props.history.push('/book');
    
};
  render() {
    return (
      <div>
        <PageHeader title='Payment Successful'/>
      <Container fluid>
       <Container>
       <div className="text-center mt-3">{this.props.adm}</div>
      
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
    adm:state.auth.adm,
    academicYear:state.hostel.academicYear
  };
};

  
export default connect(mapStateToProps)(PaymentSuccessPage);
  
