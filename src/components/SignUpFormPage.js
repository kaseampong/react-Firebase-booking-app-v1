import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input,
  Container, Row, Col,Alert } from 'reactstrap';
import SignUpForm from './SignUpForm';
import { startSignUp } from '../actions/auth';


export  class SignUpFormPage extends React.Component {
  onSubmit = (user) => {
    this.props.startSignUp(user);
  };
  render() {
    return (
        <Container fluid className="box-layout ">
        <Col
        className="box-layout__box " 
        xs={11}
        sm={6}
        md={5}
        lg={3}
        >
 <div className="box-layout__header">

{/* <img src="/images/logo.png"  height='50' width='140' /> */}
<h1 className="box-layout__title mb-3">Room-booking-app</h1>

</div>
          <SignUpForm
           onSubmit={this.onSubmit}
           message={this.props.message}
          />
           </Col>
        </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startSignUp: (user) => dispatch(startSignUp(user))
});
const mapStateToProps = (state) => {
  return {
    message: state.auth.signupMessage
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(SignUpFormPage);
