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
      <div>
      <div className="page-header">
         <h1 className="page-header__title text-center">View Rooms</h1>
     </div>
  <Container fluid >
  <div className="text-center mt-3">{this.props.reg_no}</div>

        <Row  >
        <Col
        className="mt-4 pt-2"
        sm={{ size: 10, offset: 1 }}
        md={{ size: 6, offset: 3 }}
        >
          <ViewRoomsForm
           onSubmit={this.onSubmit}
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
    reg_no:state.auth.regNo
  };
};

const mapDispatchToProps = (dispatch) => ({
  startViewRooms: (details) => dispatch(startViewRooms(details))
});

export default connect(mapStateToProps,mapDispatchToProps)(ViewRoomsFormPage);
