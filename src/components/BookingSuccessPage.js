import React from 'react';
import { connect } from 'react-redux';
import { Button, Container, Alert } from 'reactstrap';
import PageHeader from './PageHeader';
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
     <PageHeader title='Booking  Successful'/>
      <Container fluid>
       <Container>
      
       <div className="text-center mt-3">{this.props.adm}</div>
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
    adm:state.auth.adm,
    academicYear:state.auth.academicYear
  };
};

const mapDispatchToProps = (dispatch) => ({
  startViewBooking: (details) => dispatch(startViewBooking(details))
});
  
export default connect(mapStateToProps,mapDispatchToProps)(BookingSuccessPage);
  
