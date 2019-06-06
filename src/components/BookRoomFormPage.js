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
      <div>
      <div className="page-header">
         <h1 className="page-header__title text-center">Book Room</h1>
     </div>
  <Container fluid >
  <div className="text-center mt-3">{this.props.reg_no}</div>

        <Row  >
        <Col
        className="mt-4 "
        sm={{ size: 10, offset: 1 }}
        md={{ size: 6, offset: 3 }}
        >
         
         <BookRoomForm
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
    reg_no:state.auth.regNo
  };
};

const mapDispatchToProps = (dispatch) => ({
  startBookRoom: (details) => dispatch(startBookRoom(details))
});

export default connect(mapStateToProps,mapDispatchToProps)(BookRoomFormPage);