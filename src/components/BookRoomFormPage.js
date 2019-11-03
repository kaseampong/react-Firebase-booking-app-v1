import React from 'react';
import { connect } from 'react-redux';
import {Container, Row, Col } from 'reactstrap';
import BookRoomForm from './BookRoomForm';
import PageHeader from './PageHeader';
import { startBookRoom } from '../actions/booking';

export  class BookRoomFormPage extends React.Component {
  onSubmit = (details) => {
    this.props.startBookRoom(details);
  };
  render() {
    return (
      <div>
        <PageHeader title='Book Room'/>
  <Container fluid >
  <div className="text-center mt-3">{this.props.adm}</div>

        <Row  >
        <Col
        className="mt-4 "
        sm={{ size: 10, offset: 1 }}
        md={{ size: 6, offset: 3 }}
        >
         
         <BookRoomForm
           onSubmit={this.onSubmit}
           message={this.props.message}
           adm={this.props.adm}
           gender={this.props.gender}
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
    adm:state.auth.adm,
    gender:state.auth.gender
  };
};

const mapDispatchToProps = (dispatch) => ({
  startBookRoom: (details) => dispatch(startBookRoom(details))
});

export default connect(mapStateToProps,mapDispatchToProps)(BookRoomFormPage);
