import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input,
  Container, Row, Col,Alert,ListGroup,ListGroupItem } from 'reactstrap';
import BookingForm from './BookingForm';
import { startViewBooking} from '../actions/booking';


export  class BookingFormPage extends React.Component {
  onSubmit = (details) => {
    this.props.startViewBooking(details).then(()=>{
      this.props.history.push('/booking');
  });
  };
  render() {
    return (
  <Container fluid >
  <h4 className="text-center form__header mt-3">Booking</h4>
  <div className="text-center mt-3">{this.props.reg_no}</div>

        <Row  >
        <Col
        className="mt-4 "
        xs={{ size: 6, offset: 3 }}
        >
         <BookingForm
           onSubmit={this.onSubmit}
           message={this.props.message}
          />
           </Col>
           </Row>
     
        </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    message:state.booking.message,
    reg_no:state.auth.regNo
  };
};

const mapDispatchToProps = (dispatch) => ({
  startViewBooking: (details) => dispatch(startViewBooking(details))
});

export default connect(mapStateToProps,mapDispatchToProps)(BookingFormPage);
