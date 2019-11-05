import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import PaymentForm from './PaymentForm';
import PageHeader from './PageHeader';
import { startMakePayment } from '../actions/payment';
import { resetMessage } from '../actions/auth';

export  class PaymentFormPage extends React.Component {
  onSubmit = (details) => {
    this.props.startMakePayment(details);
    this.props.resetMessage();

  };
  render() {
    return (
      <div>
        <PageHeader title='Payment'/>
  <Container fluid >
  <div className="text-center mt-3">{this.props.adm}</div>

        <Row  >
        <Col
        className="mt-4 "
        sm={{ size: 10, offset: 1 }}
        md={{ size: 6, offset: 3 }}
        >
         
         <PaymentForm
           onSubmit={this.onSubmit}
           message={this.props.message}
           adm={this.props.adm}
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
    adm:state.auth.adm
  };
};

const mapDispatchToProps = (dispatch) => ({
    startMakePayment: (details) => dispatch(startMakePayment(details)),
  resetMessage: () => dispatch(resetMessage())

});

export default connect(mapStateToProps,mapDispatchToProps)(PaymentFormPage);
