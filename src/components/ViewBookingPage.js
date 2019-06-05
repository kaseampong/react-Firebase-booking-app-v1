import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input,
  Container, Row, Col,Alert ,ListGroup,ListGroupItem} from 'reactstrap';
import Booking from './Booking';


export const ViewBookingPage = (props) => {

return (
  <div>
      <div className="page-header">
         <h1 className="page-header__title text-center">My Booking</h1>
     </div>
<Container fluid>
<Container>

<div className="text-center mt-3 mb-3">{props.reg_no}</div>

{
    props.booking.length === 0 ? (
         <Alert color="primary" className="text-center mt-2">
         You have no Booking.
         </Alert>
      ) : 
      (
        <Row>
          <Col sm={{ size: 8, offset: 2}} >
          <ListGroup>

{
  props.booking.map((booking) => {
    return <Booking key={booking.roomName} {...booking} />;
  })
}
</ListGroup>
          </Col>
        </Row>
)
    } 
</Container>
</Container>
</div>
);
};
  const mapStateToProps = (state) => {
    return {
      booking: state.booking.booking,
      reg_no:state.auth.regNo
    };
  };
  
  export default connect(mapStateToProps)(ViewBookingPage);
  