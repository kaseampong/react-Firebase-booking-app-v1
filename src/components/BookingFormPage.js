import React from 'react';
import { connect } from 'react-redux';
import {Container, Row, Col } from 'reactstrap';
import BookingForm from './BookingForm';
import PageHeader from './PageHeader';
import { startViewBooking} from '../actions/booking';


export  class BookingFormPage extends React.Component {
  onSubmit = (details) => {
    this.props.startViewBooking(details).then(()=>{
      this.props.history.push('/booking');
  });
  };
  render() {
    return (
          <div>
            <PageHeader title='Booking'/>
      <Container fluid >
      <div className="text-center mt-3">{this.props.adm}</div>

            <Row  >
            <Col
            className="mt-4 "
            sm={{ size: 10, offset: 1 }}
            md={{ size: 6, offset: 3 }}
            >
            <BookingForm
              onSubmit={this.onSubmit}
              message={this.props.message}
              />
              </Col>
              </Row>
        
            </Container>
            </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    message:state.booking.message,
    adm:state.auth.adm
  };
};

const mapDispatchToProps = (dispatch) => ({
  startViewBooking: (details) => dispatch(startViewBooking(details))
});

export default connect(mapStateToProps,mapDispatchToProps)(BookingFormPage);
