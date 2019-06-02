import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input,
  Container, Row, Col,Alert,ListGroup,ListGroupItem } from 'reactstrap';
import ViewRoomsForm from './ViewRoomsForm';
import { startViewRooms } from '../actions/booking';


export  class ViewRoomsFormPage extends React.Component {
  onSubmit = (details) => {
    this.props.startViewRooms(details).then( () => {
    this.props.history.push('/rooms');
      }
    );

  };
  render() {
    return (
   
  <Container fluid >
  <h4 className="text-center form__header mt-3">View Rooms</h4>
  <div className="text-center mt-3">{this.props.reg_no}</div>

        <Row  >
        <Col
        className="mt-5 pt-2"
        xs={{ size: 6, offset: 3 }}
        >
          <ViewRoomsForm
           onSubmit={this.onSubmit}
          />
           </Col>
           </Row>
        </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reg_no:state.auth.regNo
  };
};

const mapDispatchToProps = (dispatch) => ({
  startViewRooms: (details) => dispatch(startViewRooms(details))
});

export default connect(mapStateToProps,mapDispatchToProps)(ViewRoomsFormPage);
