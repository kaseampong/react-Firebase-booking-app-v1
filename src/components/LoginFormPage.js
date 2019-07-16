import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input,
  Container, Row, Col,Alert } from 'reactstrap';
import LoginForm from './LoginForm';
import { startLogin } from '../actions/auth';


export class LoginFormPage extends React.Component {
  constructor(props) {
    super(props);

  }
  onSubmit = (user) => {
    this.props.startLogin(user);
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

{/* <img src="/images/slogo.png"  height='50' width='140' /> */}
<h1 className="box-layout__title mb-4">Room-booking-app</h1>
</div>
          <LoginForm
            onSubmit={this.onSubmit}
            message={this.props.message}
          />
           </Col>
        </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: (user) => dispatch(startLogin(user))
  });
  
const mapStateToProps = (state) => {
    return {
      message: state.auth.loginMessage,
    };
  };
  
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(LoginFormPage);
  