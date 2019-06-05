import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container,Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody,ListGroup,ListGroupItem ,Row,Col} from 'reactstrap';
import Header from './Header';
import { startViewBooking,startViewRooms } from '../actions/booking';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faBed,faKey, faQuestionCircle,faMoneyBillWave,faCoins }from '@fortawesome/free-solid-svg-icons'


    export class DashboardPage extends React.Component{
      constructor(props) {
        super(props);
        this.state = {
        };
      }
    render(){
    const uid = sessionStorage.getItem("uid");
    return(
      <div>
         <div className="page-header">
            <h1 className="page-header__title text-center">Online Booking</h1>
        </div>
        <Container fluid>
        <Container >
  <div className="text-center mt-3">{this.props.reg_no}</div>
  <Row className="mt-3">
      <Col sm="4">
        <Card>
        <CardBody>
        <div className="d-flex justify-content-center mb-3">
        <FontAwesomeIcon icon={faBuilding} color="#696969"	 size="lg" />
        </div>
          <CardText className="text-center">View the available rooms.</CardText>
          <div className="d-flex justify-content-center">
          <Link className="button button--secondary" to="/view">View Rooms</Link>
          </div>
        </CardBody>
        </Card>
      </Col>
      <Col sm="4">
        <Card>
        <CardBody>
        <div className="d-flex justify-content-center mb-3">
        <FontAwesomeIcon icon={faKey} color="#696969" size="lg" />
        </div>
          <CardText className="text-center">View available booking you made.</CardText>
          <div className="d-flex justify-content-center">
          <Link className="button button--secondary" to="/viewBooking/form">View Booking</Link>
          </div>
        </CardBody>
        </Card>
      </Col>
      <Col sm="4">
        <Card>
        <CardBody>
        <div className="d-flex justify-content-center mb-3">
        <FontAwesomeIcon icon={faBed} color="#696969" size="lg" />
        </div>
          <CardText className="text-center">Book available room for accommodation.</CardText>
          <div className="d-flex justify-content-center">
          <Link className="button button--secondary" to="/book">Book Room</Link>
          </div>
        </CardBody>
        </Card>
      </Col>
     
    </Row>
    <Row className="mt-4">
    <Col sm="4">
        <Card>
        <CardBody>
        <div className="d-flex justify-content-center mb-3">
        <FontAwesomeIcon icon={faCoins} color="#696969" size="lg" />
        </div>
          <CardText className="text-center">Check payment method.</CardText>
          <div className="d-flex justify-content-center">
          <Link className="button button--secondary" to="/payment">Check Payment</Link>
          </div>
        </CardBody>
        </Card>
      </Col>
    <Col sm="4">
        <Card>
        <CardBody>
        <div className="d-flex justify-content-center mb-3">
        <FontAwesomeIcon icon={faQuestionCircle} color="#696969" size="lg" />
        </div>
          <CardText className="text-center">Check for help.</CardText>
          <div className="d-flex justify-content-center">
          <Link className="button button--secondary" to="/help">How To Book</Link>
          </div>
        </CardBody>
        </Card>
      </Col>
     
    </Row>

        </Container>
        </Container>
        </div>
    );
    
    
    }
  }
  
  
  const mapStateToProps = (state) => {
    return {
      reg_no: state.auth.regNo
    };
  };
  
  export default connect(mapStateToProps)(DashboardPage);



