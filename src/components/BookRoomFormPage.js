import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input,
  Container, Row, Col,Alert,ListGroup,ListGroupItem } from 'reactstrap';
import BookRoomForm from './BookRoomForm';
import { startBookRoom } from '../actions/booking';

export  class BookRoomFormPage extends React.Component {
  onSubmit = (details) => {
    this.props.startBookRoom(details);
  };
  render() {
    return (
  <Container fluid >
  <h4 className="text-center form__header mt-3">Book Room</h4>
  <div className="text-center mt-3">{this.props.reg_no}</div>

        <Row  >
        <Col
        className="mt-4 "
        xs={{ size: 6, offset: 3 }}
        >
         
         <BookRoomForm
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
    reg_no:state.auth.reg_no
  };
};

const mapDispatchToProps = (dispatch) => ({
  startBookRoom: (details) => dispatch(startBookRoom(details))
});

export default connect(mapStateToProps,mapDispatchToProps)(BookRoomFormPage);
