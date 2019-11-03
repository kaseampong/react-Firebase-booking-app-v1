import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container,Card, CardText, CardDeck, CardBody} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faBed,faKey, faQuestionCircle,faCoins,faImages }from '@fortawesome/free-solid-svg-icons'
import PageHeader from './PageHeader';


const DashboardPage = (props) => (
<div>
 <div>
   
      <PageHeader title='Online Booking'/>
        <Container fluid>
         <Container >
        <div className="text-center mt-3">{props.adm}</div>
          <Container fluid className="content-container mt-2 ">
       <CardDeck> 
          <Card>
            <CardBody>
            <div className="d-flex justify-content-center ">
            <FontAwesomeIcon icon={faBuilding} color="#696969"	 size="lg" />
            </div>
              <CardText className="text-center">View the available rooms.</CardText>
              <div className="d-flex justify-content-center">
              <Link className="button button--secondary" to="/view">View Rooms</Link>
              </div>
            </CardBody>
            </Card>
            <Card>
            <CardBody>
            <div className="d-flex justify-content-center">
            <FontAwesomeIcon icon={faKey} color="#696969" size="lg" />
            </div>
              <CardText className="text-center">View available booking you made.</CardText>
              <div className="d-flex justify-content-center">
              <Link className="button button--secondary" to="/viewBooking/form">View Booking</Link>
              </div>
            </CardBody>
            </Card>
            <Card>
            <CardBody>
            <div className="d-flex justify-content-center ">
            <FontAwesomeIcon icon={faBed} color="#696969" size="lg" />
            </div>
              <CardText className="text-center">Book available room for accommodation.</CardText>
              <div className="d-flex justify-content-center">
              <Link className="button button--secondary" to="/book">Book Room</Link>
              </div>
            </CardBody>
            </Card>
             </CardDeck> 
       <CardDeck className="mt-md-3"> 
       <Card>
            <CardBody>
            <div className="d-flex justify-content-center">
            <FontAwesomeIcon icon={faCoins} color="#696969" size="lg" />
            </div>
              <CardText className="text-center">Check payment method.</CardText>
              <div className="d-flex justify-content-center">
              <Link className="button button--secondary" to="/payment">Check Payment</Link>
              </div>
            </CardBody>
            </Card>
            <Card>
            <CardBody>
            <div className="d-flex justify-content-center">
            <FontAwesomeIcon icon={faImages} color="#696969" size="lg" />
            </div>
              <CardText className="text-center">View gallery for hostels.</CardText>
              <div className="d-flex justify-content-center">
              <Link className="button button--secondary" to="/gallery">View Gallery</Link>
              </div>
            </CardBody>
            </Card>
            <Card>
            <CardBody>
            <div className="d-flex justify-content-center">
            <FontAwesomeIcon icon={faQuestionCircle} color="#696969" size="lg" />
            </div>
              <CardText className="text-center">Check for help.</CardText>
              <div className="d-flex justify-content-center">
              <Link className="button button--secondary" to="/help">How To Book</Link>
              </div>
            </CardBody>
            </Card>
       </CardDeck> 
</Container>
</Container>
</Container>
        </div>
      </div>
);

  
  const mapStateToProps = (state) => {
    return {
      adm: state.auth.adm
    };
  };
  
  export default connect(mapStateToProps)(DashboardPage);



