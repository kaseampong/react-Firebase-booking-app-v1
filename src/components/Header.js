import React from 'react';
import { Container,Button} from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';


export const Header = ({startLogout}) => (
  <Container fluid className="header">
  <Container className="header__content">
  <Link className="header__title" to="/dashboard">
          <h1 className="header__title">booking-app</h1>
          </Link>
        <button className="button button--link" onClick={startLogout}>Logout</button>

  </Container>
  </Container>
  
);


const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
