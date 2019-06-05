import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input,
  Container, Row, Col,Alert,ListGroup,ListGroupItem } from 'reactstrap';
import PaymentForm from './PaymentForm';
import { startMakePayment } from '../actions/payment';

export  class PaymentFormPage extends React.Component {
  onSubmit = (details) => {
    this.props.startMakePayment(details);
  };
  render() {
    return (
      <div>
      <div className="page-header">
         <h1 className="page-header__title text-center">Payment</h1>
     </div>
  <Container fluid >
  <div className="text-center mt-3">{this.props.reg_no}</div>

        <Row  >
        <Col
        className="mt-4 "
        sm={{ size: 10, offset: 1 }}
        md={{ size: 6, offset: 3 }}
        >
         
         <PaymentForm
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
    message:state.payment.message,
    reg_no:state.auth.regNo
  };
};

const mapDispatchToProps = (dispatch) => ({
    startMakePayment: (details) => dispatch(startMakePayment(details))
});

export default connect(mapStateToProps,mapDispatchToProps)(PaymentFormPage);
